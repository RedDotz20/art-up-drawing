import { useRef } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSolidDownload } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSave } from 'react-icons/fa';

type OptionsProps = { canvasRef: React.RefObject<HTMLCanvasElement> };

export default function Options({ canvasRef }: OptionsProps) {
  //? Upload Canvas Image
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleUploadEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target?.result as string;
        image.onload = () => {
          const canvas = canvasRef.current;
          if (canvas) {
            const context = canvas.getContext('2d');
            context?.drawImage(image, 0, 0);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      //? Trigger the hidden file input
      fileInputRef.current.click();
    }
  };

  //? Download Canvas Image
  const handleDownloadCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'canvas_image.png';
      a.click();
    }
  };

  //TODO: Save Canvas to DB
  const handleSaveCanvas = () => {
    if (canvasRef.current) {
      const imageData = canvasRef.current.toDataURL();
    }
  };

  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0';

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          aria-label="Options"
          startContent={<GiHamburgerMenu className={iconClasses} />}
        >
          Options
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Dropdown menu with icons"
      >
        <DropdownItem
          key="save"
          startContent={<FaSave className={iconClasses} />}
          onClick={handleSaveCanvas}
        >
          Save
        </DropdownItem>
        <DropdownItem
          key="upload"
          startContent={<AiOutlineCloudUpload className={iconClasses} />}
          onClick={handleUploadClick}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleUploadEvent}
            style={{ display: 'none' }}
          />
          Upload image
        </DropdownItem>
        <DropdownItem
          key="download"
          startContent={<BiSolidDownload className={iconClasses} />}
          onClick={handleDownloadCanvas}
        >
          Download
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
