declare module "react-native-photo-view-ex" {

  import * as React from 'react'
  import {
    AccessibilityProperties,
    ImageRequireSource,
    ImageURISource,
    LayoutChangeEvent,
    NativeSyntheticEvent,
    StyleProp,
    TransformsStyle,
  } from 'react-native'

  type PhotoViewResizeMode = "center" | "contain" | "cover" | "fitStart" | "fitEnd" | "stretch"

  export interface PhotoViewStyle extends TransformsStyle {
    bottom?: number,
    display?: 'flex' | 'none',
    end?: number,
    flex?: number,
    flexGrow?: number,
    flexShrink?: number,
    height?: number | string
    left?: number,
    margin?: number,
    marginBottom?: number,
    marginEnd?: number,
    marginHorizontal?: number,
    marginLeft?: number,
    marginRight?: number,
    marginStart?: number,
    marginTop?: number,
    marginVertical?: number,
    maxHeight?: number,
    maxWidth?: number,
    minHeight?: number,
    minWidth?: number,
    opacity?: number,
    position?: 'absolute' | 'relative',
    right?: number,
    start?: number,
    top?: number,
    width?: number | string,
    zIndex?: number,
  }

  // helper for event interface
  export interface PhotoViewEvent<T = {}> extends NativeSyntheticEvent<{}> {
    nativeEvent: T
  }

  export type PhotoViewProgressEvent = PhotoViewEvent<{
    loaded: number,
    total: number,
  }>

  export type PhotoViewScaleEvent = PhotoViewEvent<{
    scale: number,
    scaleFactor: number,
    focusX: number,
    focusY: number,
  }>

  export type PhotoViewTapEvent = PhotoViewEvent<{
    scale: number,
    x: number,
    y: number,
  }>

  export type PhotoViewViewTapEvent = PhotoViewEvent<{
    scale: number,
    x: number,
    y: number,
  }>

  export interface PhotoViewProps extends AccessibilityProperties {
    /**
     * The same as `source` for other React images, except that it does not handle arrays.
     */
    source: ImageRequireSource | ImageURISource;
    /**
     * Similarly to `source`, but used to render the loading indicator.
     *
     * __NOTE:__ Must be a local image.
     */
    loadingIndicatorSource?: ImageRequireSource | ImageURISource;
    /**
     * Duration of image fade (in ms)
     */
    fadeDuration?: number;
    /**
     * Set zoom scale programmatically.
     */
    scale?: number;
    /**
     * The maximum allowed zoom scale.
     * @default 3.0
     */
    maximumZoomScale?: number;
    /**
     * The minimum allowed zoom scale.
     * @default 1.0
     */
    minimumZoomScale?: number;
    /**
     * __Android only:__ One of the default Android scale types.
     * @default "cover"
     */
    resizeMode?: PhotoViewResizeMode;
    /**
     * style supports a subset of the default react-native style.
     */
    style?: StyleProp<PhotoViewStyle>;
    /**
     * __iOS only:__ When true, shows a horizontal scroll indicator.
     * @default true
     */
    showsHorizontalScrollIndicator?: boolean;
    /**
     * __iOS only:__ When true, shows a vertical scroll indicator.
     * @default true
     */
    showsVerticalScrollIndicator?: boolean;
    /**
     * __Android only:__ Double-tap zoom transition duration
     */
    zoomTransitionDuration?: number;
    /**
     * A unique identifier for this element to be used in UI Automation testing scripts.
     */
    testID?: string;
    /**
     * Invoked on load error.
     * Currently, it sends nothing in `nativeEvent`.
     */
    onError?: (error: PhotoViewEvent) => void;
    /**
     * Invoked on mount and layout changes.
     */
    onLayout?: (event: LayoutChangeEvent) => any;
    /**
     * Invoked when load completes successfully.
     */
    onLoad?: (event: PhotoViewEvent) => any;
    /**
     * Invoked when load either succeeds or fails.
     */
    onLoadEnd?: (event: PhotoViewEvent) => any;
    /**
     * Invoked on load start.
     */
    onLoadStart?: (event: PhotoViewEvent) => any;
    /**
     * __iOS only:__ Callback function invoked on download progress.
     */
    onProgress?: (event: PhotoViewProgressEvent) => any;
    /**
     * Callback function called on scale changes.
     */
    onScale?: (event: PhotoViewScaleEvent) => any;
    /**
     * Callback function called on image tap.
     */
    onTap?: (event: PhotoViewTapEvent) => any;
    /**
     * Callback function called on tap outside of the image.
     */
    onViewTap?: (event: PhotoViewViewTapEvent) => any;
  }

  export default class PhotoView extends React.Component<PhotoViewProps, any> {}
}
