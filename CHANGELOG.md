# Changelog

## [2.9.1](https://github.com/runejo/PxWeb2/compare/v2.9.0...v2.9.1) (2026-07-03)


### :building_construction: Build System and dependencies

* add release-please configuration file and update workflow to use it ([bb3de21](https://github.com/runejo/PxWeb2/commit/bb3de213f230ff3f40544ec266d578242824820d))
* comment out token in release-please action configuration ([5556cc4](https://github.com/runejo/PxWeb2/commit/5556cc4ff6f4dbed6248d20557c6e0b6d2a81b66))
* remove pull request header and footer from release-please configuration ([9e6396a](https://github.com/runejo/PxWeb2/commit/9e6396aa81b9154f5921dd8eeb0f691bd22e0cae))
* update workflows to trigger on push events for version tags ([28c40e8](https://github.com/runejo/PxWeb2/commit/28c40e83939a77377425121aaa0fc3b179296b8b))


### :rewind: Reverts

* re-add manifest ([0cab778](https://github.com/runejo/PxWeb2/commit/0cab77846d400fba64955f5b367251af8f930d85))

## 2.9.0 (2026-07-02)


### :sparkles: Features

* add release-please configuration for automated versioning and changelog generation ([e09e3c6](https://github.com/runejo/PxWeb2/commit/e09e3c6d628f54c138048097efa7c1b76429a73c))
* add release-please workflow for automated releases ([de62236](https://github.com/runejo/PxWeb2/commit/de62236f808f975fe8ddf652bf19f62b88000945))
* Chart colors  ([#1334](https://github.com/runejo/PxWeb2/issues/1334)) ([6114df7](https://github.com/runejo/PxWeb2/commit/6114df7d93ace4f5f0c7f9bab9397a83dcaaa346))
* specify release type for release-please action in workflow ([c8dc8dc](https://github.com/runejo/PxWeb2/commit/c8dc8dca034e34719f2ca0626e1cf2eeeb11be15))


### :bug: Bug Fixes

* add always-update parameter to release-please configuration ([0400ee9](https://github.com/runejo/PxWeb2/commit/0400ee9799cbc24b717f05e532e8a78736f8f23b))
* add config-file parameter to release-please action ([60e751e](https://github.com/runejo/PxWeb2/commit/60e751e3042dfa455ef056c71db093ad01dcdff6))
* add draft and force-tag-creation options to release-please configuration ([5b2fc5c](https://github.com/runejo/PxWeb2/commit/5b2fc5cbbb3280b3f5627ec77a3bb98dae718757))
* add id attribute to GlobalAlert in WipStatusMessage component ([#1345](https://github.com/runejo/PxWeb2/issues/1345)) ([de9b5ea](https://github.com/runejo/PxWeb2/commit/de9b5ea620285d9f9f75487533a8988480154b43))
* add missing period in thanks section of README Release-As: 2.9.0 ([0a103ba](https://github.com/runejo/PxWeb2/commit/0a103ba6aecc314f126874a67c037e41461e3c95))
* add pull-request footer to release-please configuration ([d1b187f](https://github.com/runejo/PxWeb2/commit/d1b187fcbd897270f370dc2b82df22f1cfc0efe2))
* add pull-request-footer to release-please configuration ([5df7a22](https://github.com/runejo/PxWeb2/commit/5df7a22b2ec7593130bacc79594864b38cdc0a89))
* add repo-url to release-please action configuration ([041cdff](https://github.com/runejo/PxWeb2/commit/041cdff7eb0cd5622420c9766981e350090bc779))
* comment out token in release-please action configuration and update manifest file ([b57e448](https://github.com/runejo/PxWeb2/commit/b57e448797589891438e5e07fa75ff5022725fe0))
* correct capitalization in project pages link in README ([0afaa53](https://github.com/runejo/PxWeb2/commit/0afaa53f626b9e662c5d1b6c5b1fd714f11ae8af))
* correct pull request header in release-please configuration ([cb1dada](https://github.com/runejo/PxWeb2/commit/cb1dada2c47730e165a519ecf277f8603b8802d0))
* ensure initial version is set to 2.9.0 in release-please configuration ([ef799ac](https://github.com/runejo/PxWeb2/commit/ef799ac35f9e14f1b38fb9df7135da3b6a95581f))
* ensure token is included in release-please action configuration ([ae8bb21](https://github.com/runejo/PxWeb2/commit/ae8bb21cb3d5734897fd75ef1b313c69511f1f86))
* move release-type, release-as, and pull-request-header to the root of the configuration ([6907bcb](https://github.com/runejo/PxWeb2/commit/6907bcb6707016cc451aa9cfbc55a65c6174bc53))
* remove include-commit-authors option from release-please configuration ([2656c81](https://github.com/runejo/PxWeb2/commit/2656c81558f5461f582475a61dd8ac025753ed85))
* remove obsolete backup manifest file and restore main manifest ([e52486f](https://github.com/runejo/PxWeb2/commit/e52486feae83752375d61d5dfbb497d149d13469))
* remove obsolete release-please manifest and add backup version ([cf3206b](https://github.com/runejo/PxWeb2/commit/cf3206bab6df1e85c415269128aa56704bd01a85))
* remove repo-url from release-please action configuration ([30ef091](https://github.com/runejo/PxWeb2/commit/30ef09118c07a805e34793166ca0613563704e46))
* remove trailing period from thanks section in README Release-As: 2.9.0 ([b459cc7](https://github.com/runejo/PxWeb2/commit/b459cc7714b2062ba61b34c97b7d65db0037db75))
* restructure release-please configuration to include packages section ([61da29f](https://github.com/runejo/PxWeb2/commit/61da29f6ff21f1f94e8e9ea036d7d9948f8afc02))
* revert commit search depth to 100 and ensure commit authors are included in release-please configuration ([3cd6a14](https://github.com/runejo/PxWeb2/commit/3cd6a14f9457394ffaf9a3c21fea6cace88eac06))
* standardize package name to lowercase in package.json ([9d78663](https://github.com/runejo/PxWeb2/commit/9d786631a97e9d608e5d24c496fbbbce33a19bab))
* uncomment token in release-please action configuration and update commit search depth to 50 ([cfd638c](https://github.com/runejo/PxWeb2/commit/cfd638c72d4194791804a33f56fce227d52394c9))
* update changelog sections in release-please configuration ([b554f8d](https://github.com/runejo/PxWeb2/commit/b554f8d357c3b33911a1c0b4a897978379b6d0ad))
* update commit search depth and initial version in release-please configuration ([05e3f2b](https://github.com/runejo/PxWeb2/commit/05e3f2b65741f210880e2f6d2060c01bc4ba33ac))
* update package name from @pxweb2/source to PxWeb in package.json Release-As: 2.9.0 ([6553749](https://github.com/runejo/PxWeb2/commit/655374980418d802f794b1f8b8a03477155dbdde))
* update pull-request footer format in release-please configuration ([51ca4b6](https://github.com/runejo/PxWeb2/commit/51ca4b6de01524c77fa502f03c6ea2a556896185))
* update pull-request header and footer in release-please configuration ([0d26dd9](https://github.com/runejo/PxWeb2/commit/0d26dd96293b0e23d7973dea65cf35189d19e4bc))
* update pull-request header format in release-please configuration ([8555231](https://github.com/runejo/PxWeb2/commit/8555231ee6e5eff6dd865d5ebacf5fb4692d3d1c))
* update release version to 2.9.0 in configuration files ([3c309ee](https://github.com/runejo/PxWeb2/commit/3c309eecb7438584a28f8c753e13d17f07573b44))
* update release-please configuration by renaming and relocating config file ([9dc0d13](https://github.com/runejo/PxWeb2/commit/9dc0d13ff537602856d873b0f2914842f3d90540))
* update release-please configuration to enable always-update and include commit authors ([d51bb8c](https://github.com/runejo/PxWeb2/commit/d51bb8c4cd9ed3a7e596db99f4761569f366de52))
* update release-please configuration to include additional options for tagging and component inclusion ([de2311b](https://github.com/runejo/PxWeb2/commit/de2311b440a24faf34685108f521e5f94b973e0c))


### :building_construction: Build System and dependencies

* **deps-dev:** bump wrangler from 4.99.0 to 4.100.0 ([#1343](https://github.com/runejo/PxWeb2/issues/1343)) ([45c9b53](https://github.com/runejo/PxWeb2/commit/45c9b53ffa996f4781ddbfc9b80ec62874c3d6c8))
* **deps:** bump actions/checkout from 6.0.3 to 7.0.0 ([#1352](https://github.com/runejo/PxWeb2/issues/1352)) ([8187ea1](https://github.com/runejo/PxWeb2/commit/8187ea1f4e239b8a31f0e9fdded161fa102fdbf6))
* **deps:** bump chromaui/action from 17.3.0 to 17.4.1 ([#1344](https://github.com/runejo/PxWeb2/issues/1344)) ([0e96397](https://github.com/runejo/PxWeb2/commit/0e963975c75e167de433592167622921c4102aef))
* **deps:** bump chromaui/action from 17.4.1 to 17.5.0 ([#1355](https://github.com/runejo/PxWeb2/issues/1355)) ([d7d14fe](https://github.com/runejo/PxWeb2/commit/d7d14fed17173351e07ed1c0cb4c785319852cc3))
* **deps:** bump sass from 1.100.0 to 1.101.0 ([#1341](https://github.com/runejo/PxWeb2/issues/1341)) ([a51989f](https://github.com/runejo/PxWeb2/commit/a51989f7b685124c134b6ccd00c43f4ae57158e1))
* **deps:** bump SonarSource/sonarqube-scan-action from 8.1.0 to 8.2.0 ([#1342](https://github.com/runejo/PxWeb2/issues/1342)) ([f252615](https://github.com/runejo/PxWeb2/commit/f25261533208e50fe0c821d280b8dd4a8022e0df))


### :broom: Chores

* remove Chromatic logo from README Release-As: 2.9.0 ([7ddfb28](https://github.com/runejo/PxWeb2/commit/7ddfb28d53da85b8713df1e9f81f378da58302ba))
* update mabl GitHub action to version 1.16 ([#1348](https://github.com/runejo/PxWeb2/issues/1348)) ([553a2f5](https://github.com/runejo/PxWeb2/commit/553a2f580a1838e292116097cb7322ce2d0390b9))
* Upgrade project non major dependencies ([#1350](https://github.com/runejo/PxWeb2/issues/1350)) ([953c122](https://github.com/runejo/PxWeb2/commit/953c122031307349d632c843b4993ba331c7e248))
* Upgrade react-router from v7 to v8 ([#1351](https://github.com/runejo/PxWeb2/issues/1351)) ([7201ef2](https://github.com/runejo/PxWeb2/commit/7201ef231273d42ce713eed9752c8820d5014f06))
