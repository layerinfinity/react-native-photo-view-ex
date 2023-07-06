import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent, Image, StyleSheet, View, ViewPropTypes } from 'react-native'

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
      resizeMode: PropTypes.string,
      scale: PropTypes.number,
      onLoad: PropTypes.func,
      onLoadEnd: PropTypes.func,
      onLoadStart: PropTypes.func,
      onProgress: PropTypes.func,
      onScale: PropTypes.func,
      onTap: PropTypes.func,
      onViewTap: PropTypes.func,
      showsHorizontalScrollIndicator: PropTypes.bool,
      showsVerticalScrollIndicator: PropTypes.bool,
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
          onPhotoViewerProgress: onProgress,
          onPhotoViewerScale: onScale,
          onPhotoViewerTap: onTap,
          onPhotoViewerViewTap: onViewTap,
          ...props,
          style,
          src,
          loadingIndicatorSrc: loadingIndicatorSource && loadingIndicatorSource.uri || null,
        }

        return <RNPhotoView {...nativeProps} />
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
    onPhotoViewerProgress: true,
    onPhotoViewerScale: true,
    onPhotoViewerTap: true,
    onPhotoViewerViewTap: true,
    src: true,
    loadingIndicatorSrc: true,
  },
}

const RNPhotoView = requireNativeComponent('RNPhotoView', PhotoView, cfg)
