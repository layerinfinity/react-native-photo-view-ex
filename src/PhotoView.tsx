import React from "react";
import {
  Platform,
  requireNativeComponent,
  StyleSheet,
  ViewProps,
} from "react-native";

interface Props extends ViewProps {
  source: {
    uri: string;
  };
  loadingIndicatorSource?: {
    uri: string;
  };
  fadeDuration?: number;
  minimumZoomScale: number;
  maximumZoomScale: number;
  resizeMode?:
    | "center"
    | "contain"
    | "cover"
    | "fitEnd"
    | "fitStart"
    | "stretch";
  scale?: number;
  onError?: (error: any) => void;
  onLoad?: () => void;
  onLoadEnd?: () => void;
  onLoadStart?: () => void;
  onProgress?: (event: any) => void;
  onScale?: (event: any) => void;
  onTap?: (event: any) => void;
  onViewTap?: (event: any) => void;
}

const PhotoViewComp = requireNativeComponent(
  Platform.OS === "ios" ? "RNPhotoView" : "PhotoViewAndroid"
);

export default function PhotoView({ source, ...props }: Props) {
  if (source && source.uri === "") {
    console.warn("source.uri should not be an empty string");
    return null;
  }

  const { ...src } = source;

  const {
    loadingIndicatorSource,
    onLoadStart,
    onLoad,
    onLoadEnd,
    onError,
    onScale,
    onTap,
    onViewTap,
    style: _style,
  } = props;

  const style = StyleSheet.flatten([_style]);

  const nativeProps = {
    onPhotoViewerError: onError,
    onPhotoViewerLoad: onLoad,
    onPhotoViewerLoadEnd: onLoadEnd,
    onPhotoViewerLoadStart: onLoadStart,
    onPhotoViewerScale: onScale,
    onPhotoViewerTap: onTap,
    onPhotoViewerViewTap: onViewTap,
    ...props,
    shouldNotifyLoadEvents: !!(onLoadStart || onLoad || onLoadEnd || onError),
    style,
    src,
    loadingIndicatorSrc:
      (loadingIndicatorSource && loadingIndicatorSource.uri) || null,
  };

  return <PhotoViewComp {...nativeProps} />;
}
