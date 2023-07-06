import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent, Image, StyleSheet, ViewPropTypes } from 'react-native'

export default class PhotoView extends React.PureComponent {

    static propTypes = {
      source: PropTypes.oneOfType([
        PropTypes.shape({
          uri: PropTypes.string,
        }),
        PropTypes.number,
      ]).isRequired,
      loadingIndicatorSource: PropTypes.oneOfType([
        PropTypes.shape({
          uri: PropTypes.string,
        }),
        PropTypes.number,
      ]),
      fadeDuration: PropTypes.number,
      minimumZoomScale: PropTypes.number,
      maximumZoomScale: PropTypes.number,
      resizeMode: PropTypes.oneOf(['center', 'contain', 'cover', 'fitEnd', 'fitStart', 'stretch']),
      scale: PropTypes.number,
      zoomTransitionDuration: PropTypes.number,
      onError: PropTypes.func,
      onLoad: PropTypes.func,
      onLoadEnd: PropTypes.func,
      onLoadStart: PropTypes.func,
      onProgress: PropTypes.func,
      onScale: PropTypes.func,
      onTap: PropTypes.func,
      onViewTap: PropTypes.func,
      ...ViewPropTypes,
    };

    render () {
      const {
        onError,
        onLoad,
        onLoadEnd,
        onLoadStart,
        onProgress,
        onScale,
        onTap,
        onViewTap,
        source: _source,
        loadingIndicatorSource: _loadingIndicatorSource,
        style: _style,
        ...props
      } = this.props

      const source = Image.resolveAssetSource(_source)
      const loadingIndicatorSource = Image.resolveAssetSource(_loadingIndicatorSource)

      if (source && source.uri === '') {
        console.warn('source.uri should not be an empty string')
      }

      if (props.src) {
        console.warn('The <PhotoView> component requires a `source` property rather than `src`.')
      }

      if (source && source.uri) {
        const { width, height, ...src } = source
        const style = StyleSheet.flatten([{ width, height }, _style])

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
          loadingIndicatorSrc: loadingIndicatorSource && loadingIndicatorSource.uri || null,
        }

        return <PhotoViewAndroid {...nativeProps} />
      }

      return null
    }
}

const cfg = {
  nativeOnly: {
    onPhotoViewerError: true,
    onPhotoViewerLoad: true,
    onPhotoViewerLoadEnd: true,
    onPhotoViewerLoadStart: true,
    onPhotoViewerScale: true,
    onPhotoViewerTap: true,
    onPhotoViewerViewTap: true,
    shouldNotifyLoadEvents: true,
    src: true,
    loadingIndicatorSrc: true,
  },
}

const PhotoViewAndroid = requireNativeComponent('PhotoViewAndroid', PhotoView, cfg)
