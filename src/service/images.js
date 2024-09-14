import defaultBackground from '../assets/default-background.png';
import {wait} from "@testing-library/user-event/dist/utils";
import * as fabric from 'fabric';

const material_font = new FontFace('material-icons',
  'url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)');
document.fonts.add(material_font);

const defaultFont = 'Roboto';

export const GeneratePNGImage = async (backgroundUrl, mdiIcon, mdiIconSize, textLines, font, fontSize) => {
  console.log(backgroundUrl, mdiIcon, mdiIconSize, textLines, font, fontSize);

  try {
    const canvasHeight = 800;
    const canvasWidth = 600;
    const canvas = new fabric.Canvas('c', {
      height: canvasHeight,
      width: canvasWidth,
    });

    // Load the background image or file
    const img =
      await fabric.FabricImage.fromURL(
        backgroundUrl ? backgroundUrl : defaultBackground,
        {
          crossOrigin: 'anonymous'
        }
      );
    img.scaleToHeight(canvasHeight);
    if (img.width < canvasWidth) {
      img.scaleToWidth(canvasWidth);
    }

    canvas.backgroundImage = img;

    // const mdiIconWidth = mdiIconSize;
    const mdiIconHeight = mdiIconSize;

    // const mdiIconX = (canvas.width - mdiIconWidth) / 2;
    const mdiIconY = 45 + (mdiIconHeight / 2);

    // Create a new fabric image object for the MDI icon
    const objSVG = await loadIconSVG(mdiIcon);
    const mdiSVG =
      await fabric.loadSVGFromURL(
        objSVG.default
      ).then(({objects, options}) =>
        fabric.util.groupSVGElements(objects, options)
      );
    mdiSVG.fill = 'white';
    mdiSVG.scaleToHeight(mdiIconHeight);
    mdiSVG.left = (canvas.width - (mdiSVG.width * mdiSVG.scaleX)) / 2;
    mdiSVG.top = mdiIconY;
    canvas.add(mdiSVG);

    // await material_font.load().then(() => {
    //   const text = new fabric.Text(mdiIcon, {
    //     fontSize: fontSize,
    //     fontFamily: 'material-icons',
    //     fill: 'white',
    //   })
    //   canvas.add(text);
    // });


    const writeText = (fontFamily) => {
      let y = mdiIconY + mdiIconHeight + 50;
      for (const line of textLines) {
        const text = new fabric.Text(line, {
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontWeight: 800,
          fill: 'white',
          originX: 'center',
          originY: 'top',
          left: canvasWidth / 2,
          top: y,
          lineHeight: 1,
          charSpacing: 5,
        });
        console.log(text);
        canvas.add(text);
        y += fontSize * 1.2;
      }
    }

    if (font) {
      await font.load().then(async (f) => {
        const {fontFamily} = f.loadFont();
        await wait(100);

        writeText(fontFamily);
      });
    } else {
      writeText(defaultFont);
    }

    canvas.renderAll();
    // Convert the canvas to a PNG image
    const pngData = canvas.toDataURL('image/png');

    // Return the generated PNG image as a base64-encoded string
    return pngData.replace(/^data:image\/png;base64,/, '');
  } catch (e) {
    console.log('Error', e);
    return '';
  }
}

const loadIconSVG = (name) => import(`@mdi/svg/svg/${name}.svg?raw`)
