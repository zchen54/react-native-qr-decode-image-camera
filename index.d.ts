declare module "react-native-qr-decode-image-camera";

interface QRScannerProps {
  isRepeatScan?: boolean;
  onRead: (res: string) => void;
  maskColor?: string;
  borderColor?: string;
  cornerColor?: string;
  borderWidth?: number;
  cornerBorderWidth?: number;
  cornerBorderLength?: number;
  rectHeight?: number;
  rectWidth?: number;
  isCornerOffset?: boolean;
  cornerOffsetSize?: number;
  bottomHeight?: number;
  scanBarAnimateTime?: number;
  scanBarColor?: string;
  scanBarImage?: any;
  scanBarHeight?: number;
  scanBarMargin?: number;
  hintText?: string;
  hintTextStyle?: object;
  hintTextPosition?: number;
  renderTopView?: () => JSX.Element;
  renderBottomView?: () => JSX.Element;
  isShowScanBar?: boolean;
  topViewStyle?: object;
  bottomViewStyle?: object;
  flashMode?: boolean;
  finderX?: number;
  finderY?: number;
  zoom?: number;
  translucent?: boolean;
  cameraType?: string;
}

export declare const QRscanner: (props: QRScannerProps) => JSX.Element;

export declare const QRreader: (fileUrl: string) => Promise<string>;
