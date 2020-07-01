declare module "react-native-qr-decode-image-camera";

interface QRScannerProps {
  isRepeatScan: PropTypes.bool;
  onRead: PropTypes.func;
  maskColor: PropTypes.string;
  borderColor: PropTypes.string;
  cornerColor: PropTypes.string;
  borderWidth: PropTypes.number;
  cornerBorderWidth: PropTypes.number;
  cornerBorderLength: PropTypes.number;
  rectHeight: PropTypes.number;
  rectWidth: PropTypes.number;
  isCornerOffset: PropTypes.bool;
  cornerOffsetSize: PropTypes.number;
  bottomHeight: PropTypes.number;
  scanBarAnimateTime: PropTypes.number;
  scanBarColor: PropTypes.string;
  scanBarImage: PropTypes.any;
  scanBarHeight: PropTypes.number;
  scanBarMargin: PropTypes.number;
  hintText: PropTypes.string;
  hintTextStyle: PropTypes.object;
  hintTextPosition: PropTypes.number;
  renderTopView: PropTypes.func;
  renderBottomView: PropTypes.func;
  isShowScanBar: PropTypes.bool;
  topViewStyle: PropTypes.object;
  bottomViewStyle: PropTypes.object;
  flashMode: PropTypes.bool;
  finderX: PropTypes.number;
  finderY: PropTypes.number;
  zoom: PropTypes.number;
  translucent: PropTypes.bool;
  cameraType: PropTypes.string;
}

export declare const QRscanner: (props: QRScannerProps) => JSX.Element;

export declare const QRreader: (fileUrl: string) => Promise<string>;
