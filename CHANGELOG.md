# react-native-photo-view-ex Changes

Fork of [react-native-photo-view](https://github.com/alwx/react-native-photo-view)

## \[1.2.0] - 2019-05-20

### Added

- Change Android Support dependencies to Android X.
- Some trivial changes.

## \[1.1.0] - 2019-05-20

### Added

- Missing types in TS definitions.
- Markdownlint config.

### Changed

- Some code cleanup.
- Updated Build Tools to 28.x
- RN peerDependencies

## \[1.0.4] - 2019-01-02

### Added

- `scale` property to the onViewTap event.
- customClean task in build.gradle
- npm and license badges.

### Fixed

- Fix "Could not find lint-gradle-api.jar", thanks to @ArmandoAssuncao

### Changed

- Update build.gradle, makes minSdkVersion configurable, default to 16.
- Integrates [react-image-photo-view#164](https://github.com/alwx/react-native-photo-view/pull/164)
- Update Readme.
- Update example to RN 0.57.8

### Removed

- Branch "dev"

## \[1.0.3] - 2018-09-19

- Fix podspec, thanks to @ozby

## \[1.0.2] - 2018-04-11

- Allows you to configure the SDK versions using variables from [ExtraPropertiesExtension](https://docs.gradle.org/current/dsl/org.gradle.api.plugins.ExtraPropertiesExtension.html).

## \[1.0.1] - 2018-04-11

- Fixes error en typings.

### Conversion to react-native-photo-view-ex v1.0.0 from react-native-photo-view v1.5.4

- Adds typings.
- Renames `androidZoomTransitionDuration` to `zoomTransitionDuration`
- Removes `androidScaleType` property.
- Adds `resizeMode` property supporting 'center', 'contain', 'cover', 'fitEnd', 'fitStart', 'stretch'. The default is 'cover'.
- Using the `Image.resolveAssetSource` method instead of requiring the module directly.
- Updated README.md

## \[1.5.3] - 2018-04-09

- Apply "Fixing initialZoomScaleWithMinScale when image is larger than the screen #86" by @douglasjunior
- Updated build.gradle to get settings from root project.
- Updated gradle plugin to v3.1.0
- Updated facebook fresco to v1.3.0
- Updated photodraweeview to v1.1.3
- Minor fixes, makes some Java methods private.
