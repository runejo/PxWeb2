# Changelog

## 2.9.0 (2026-07-02)


### :sparkles: Features

* add release-please configuration for automated versioning and changelog generation ([e09e3c6](https://github.com/runejo/PxWeb2/commit/e09e3c6d628f54c138048097efa7c1b76429a73c))
* add release-please workflow for automated releases ([de62236](https://github.com/runejo/PxWeb2/commit/de62236f808f975fe8ddf652bf19f62b88000945))
* Chart colors  ([#1334](https://github.com/runejo/PxWeb2/issues/1334)) ([6114df7](https://github.com/runejo/PxWeb2/commit/6114df7d93ace4f5f0c7f9bab9397a83dcaaa346))
* New layout with virtualized and separated mobile and desktop tables ([#1187](https://github.com/runejo/PxWeb2/issues/1187)) ([a279416](https://github.com/runejo/PxWeb2/commit/a2794168ef8d5895127c514d0098e7f5351c36ab))
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
* **coverage:** include additional packages in coverage exclusion list ([#1316](https://github.com/runejo/PxWeb2/issues/1316)) ([fbb75c5](https://github.com/runejo/PxWeb2/commit/fbb75c519f0252b6df0aee63fa4907a3f73f998e))
* ensure initial version is set to 2.9.0 in release-please configuration ([ef799ac](https://github.com/runejo/PxWeb2/commit/ef799ac35f9e14f1b38fb9df7135da3b6a95581f))
* ensure parent subject filter is correctly restored during sibling removal ([#1307](https://github.com/runejo/PxWeb2/issues/1307)) ([966606f](https://github.com/runejo/PxWeb2/commit/966606f203c7dd2bc9cdee19a9973e0235a76e23)), closes [#1289](https://github.com/runejo/PxWeb2/issues/1289)
* ensure token is included in release-please action configuration ([ae8bb21](https://github.com/runejo/PxWeb2/commit/ae8bb21cb3d5734897fd75ef1b313c69511f1f86))
* move release-type, release-as, and pull-request-header to the root of the configuration ([6907bcb](https://github.com/runejo/PxWeb2/commit/6907bcb6707016cc451aa9cfbc55a65c6174bc53))
* Override select width in ApiQuery ([#1322](https://github.com/runejo/PxWeb2/issues/1322)) ([3ce65e3](https://github.com/runejo/PxWeb2/commit/3ce65e35e99b5159c184e9bc83c9c371cc0b4d22))
* remove include-commit-authors option from release-please configuration ([2656c81](https://github.com/runejo/PxWeb2/commit/2656c81558f5461f582475a61dd8ac025753ed85))
* remove obsolete backup manifest file and restore main manifest ([e52486f](https://github.com/runejo/PxWeb2/commit/e52486feae83752375d61d5dfbb497d149d13469))
* remove obsolete release-please manifest and add backup version ([cf3206b](https://github.com/runejo/PxWeb2/commit/cf3206bab6df1e85c415269128aa56704bd01a85))
* remove repo-url from release-please action configuration ([30ef091](https://github.com/runejo/PxWeb2/commit/30ef09118c07a805e34793166ca0613563704e46))
* remove trailing period from thanks section in README Release-As: 2.9.0 ([b459cc7](https://github.com/runejo/PxWeb2/commit/b459cc7714b2062ba61b34c97b7d65db0037db75))
* restructure release-please configuration to include packages section ([61da29f](https://github.com/runejo/PxWeb2/commit/61da29f6ff21f1f94e8e9ea036d7d9948f8afc02))
* revert commit search depth to 100 and ensure commit authors are included in release-please configuration ([3cd6a14](https://github.com/runejo/PxWeb2/commit/3cd6a14f9457394ffaf9a3c21fea6cace88eac06))
* standardize package name to lowercase in package.json ([9d78663](https://github.com/runejo/PxWeb2/commit/9d786631a97e9d608e5d24c496fbbbce33a19bab))
* Table testData outputs warnings during builds([#1325](https://github.com/runejo/PxWeb2/issues/1325)) ([135e6a3](https://github.com/runejo/PxWeb2/commit/135e6a35e77006b8675e4349c3d5bb963d5df5cc))
* update and cleanup some imports ([#1317](https://github.com/runejo/PxWeb2/issues/1317)) ([d558163](https://github.com/runejo/PxWeb2/commit/d55816375b70a42b817106736fc9503ffe56d6b4))
* update changelog sections in release-please configuration ([b554f8d](https://github.com/runejo/PxWeb2/commit/b554f8d357c3b33911a1c0b4a897978379b6d0ad))
* update commit search depth and initial version in release-please configuration ([05e3f2b](https://github.com/runejo/PxWeb2/commit/05e3f2b65741f210880e2f6d2060c01bc4ba33ac))
* update package name from @pxweb2/source to PxWeb in package.json Release-As: 2.9.0 ([6553749](https://github.com/runejo/PxWeb2/commit/655374980418d802f794b1f8b8a03477155dbdde))
* Update plugin name to match schema validator functionality ([#1326](https://github.com/runejo/PxWeb2/issues/1326)) ([2e5561c](https://github.com/runejo/PxWeb2/commit/2e5561c47e0c735405e94ad37ea9556482441380))
* update pull-request footer format in release-please configuration ([51ca4b6](https://github.com/runejo/PxWeb2/commit/51ca4b6de01524c77fa502f03c6ea2a556896185))
* update pull-request header and footer in release-please configuration ([0d26dd9](https://github.com/runejo/PxWeb2/commit/0d26dd96293b0e23d7973dea65cf35189d19e4bc))
* update pull-request header format in release-please configuration ([8555231](https://github.com/runejo/PxWeb2/commit/8555231ee6e5eff6dd865d5ebacf5fb4692d3d1c))
* update release version to 2.9.0 in configuration files ([3c309ee](https://github.com/runejo/PxWeb2/commit/3c309eecb7438584a28f8c753e13d17f07573b44))
* update release-please configuration by renaming and relocating config file ([9dc0d13](https://github.com/runejo/PxWeb2/commit/9dc0d13ff537602856d873b0f2914842f3d90540))
* update release-please configuration to enable always-update and include commit authors ([d51bb8c](https://github.com/runejo/PxWeb2/commit/d51bb8c4cd9ed3a7e596db99f4761569f366de52))
* update release-please configuration to include additional options for tagging and component inclusion ([de2311b](https://github.com/runejo/PxWeb2/commit/de2311b440a24faf34685108f521e5f94b973e0c))


### :books: Documentation

* update README to remove Nx comment and clarify API client generation ([#1318](https://github.com/runejo/PxWeb2/issues/1318)) ([9bcaec6](https://github.com/runejo/PxWeb2/commit/9bcaec6bb93ecb8264f3dcb462888516b41baff4))


### :art: Styles

* change height to max-height for scrollableVariableFilter ([#1308](https://github.com/runejo/PxWeb2/issues/1308)) ([5db3e49](https://github.com/runejo/PxWeb2/commit/5db3e493d6f89a41a2b17c21d5eb4e5b15e1aad2))


### :building_construction: Build System and dependencies

* **deps-dev:** bump wrangler from 4.99.0 to 4.100.0 ([#1343](https://github.com/runejo/PxWeb2/issues/1343)) ([45c9b53](https://github.com/runejo/PxWeb2/commit/45c9b53ffa996f4781ddbfc9b80ec62874c3d6c8))
* **deps:** bump actions/checkout from 6.0.2 to 6.0.3 ([#1329](https://github.com/runejo/PxWeb2/issues/1329)) ([762e113](https://github.com/runejo/PxWeb2/commit/762e1133e2ef57ccd99f1fa4bd313e3d73d2a9ba))
* **deps:** bump actions/checkout from 6.0.3 to 7.0.0 ([#1352](https://github.com/runejo/PxWeb2/issues/1352)) ([8187ea1](https://github.com/runejo/PxWeb2/commit/8187ea1f4e239b8a31f0e9fdded161fa102fdbf6))
* **deps:** bump chromaui/action from 16.10.1 to 17.0.0 ([#1296](https://github.com/runejo/PxWeb2/issues/1296)) ([4d0eacc](https://github.com/runejo/PxWeb2/commit/4d0eaccdc1d837dbf0f0c1d895e39e87ac9953b1))
* **deps:** bump chromaui/action from 17.0.0 to 17.1.0 ([#1310](https://github.com/runejo/PxWeb2/issues/1310)) ([d47252a](https://github.com/runejo/PxWeb2/commit/d47252a61db7799904a4f33095b227a93a4516e4))
* **deps:** bump chromaui/action from 17.1.0 to 17.3.0 ([#1328](https://github.com/runejo/PxWeb2/issues/1328)) ([4441cf4](https://github.com/runejo/PxWeb2/commit/4441cf4d56c73021db05c7c4c15b7454e03944a2))
* **deps:** bump chromaui/action from 17.3.0 to 17.4.1 ([#1344](https://github.com/runejo/PxWeb2/issues/1344)) ([0e96397](https://github.com/runejo/PxWeb2/commit/0e963975c75e167de433592167622921c4102aef))
* **deps:** bump chromaui/action from 17.4.1 to 17.5.0 ([#1355](https://github.com/runejo/PxWeb2/issues/1355)) ([d7d14fe](https://github.com/runejo/PxWeb2/commit/d7d14fed17173351e07ed1c0cb4c785319852cc3))
* **deps:** bump docker/build-push-action from 7.1.0 to 7.2.0 ([#1297](https://github.com/runejo/PxWeb2/issues/1297)) ([197d570](https://github.com/runejo/PxWeb2/commit/197d570d97d97b3af59cf2b5d841f75b6308d19e))
* **deps:** bump docker/login-action from 4 to 4.1.0 ([#1284](https://github.com/runejo/PxWeb2/issues/1284)) ([9cde9fd](https://github.com/runejo/PxWeb2/commit/9cde9fd49a6dd1a0e8737d3bd337669a30f342bd))
* **deps:** bump docker/login-action from 4.1.0 to 4.2.0 ([#1314](https://github.com/runejo/PxWeb2/issues/1314)) ([dccca56](https://github.com/runejo/PxWeb2/commit/dccca5657f9cb633e3843cc1fc8cd90f14bebe86))
* **deps:** bump docker/metadata-action from 6.0.0 to 6.1.0 ([#1294](https://github.com/runejo/PxWeb2/issues/1294)) ([b9cd1da](https://github.com/runejo/PxWeb2/commit/b9cd1da0c59c720daee9887e937364d58e98c307))
* **deps:** bump docker/setup-buildx-action from 4.0.0 to 4.1.0 ([#1295](https://github.com/runejo/PxWeb2/issues/1295)) ([e25b03d](https://github.com/runejo/PxWeb2/commit/e25b03dc7c2ba94f2196c33a27f458e5f3b6ab85))
* **deps:** bump docker/setup-qemu-action from 4.0.0 to 4.1.0 ([#1313](https://github.com/runejo/PxWeb2/issues/1313)) ([b10c49d](https://github.com/runejo/PxWeb2/commit/b10c49d618443bfe9feb0db8b40001e356e5ce07))
* **deps:** bump github/codeql-action from 4.35.4 to 4.35.5 ([#1282](https://github.com/runejo/PxWeb2/issues/1282)) ([1044c49](https://github.com/runejo/PxWeb2/commit/1044c49348d97da99a258f9beed2904ceb247c8d))
* **deps:** bump github/codeql-action from 4.35.5 to 4.36.0 ([#1293](https://github.com/runejo/PxWeb2/issues/1293)) ([5e949ee](https://github.com/runejo/PxWeb2/commit/5e949ee7b045785a3cb6dcf7859a586976aca4cb))
* **deps:** bump github/codeql-action from 4.36.0 to 4.36.2 ([#1327](https://github.com/runejo/PxWeb2/issues/1327)) ([ae7ea63](https://github.com/runejo/PxWeb2/commit/ae7ea63c220bcb8d8c7340fb892fc7ef8bd9d369))
* **deps:** bump i18next-http-backend from 3.0.6 to 4.0.0 ([#1298](https://github.com/runejo/PxWeb2/issues/1298)) ([4b9f0c0](https://github.com/runejo/PxWeb2/commit/4b9f0c0ec60526d53283dcfcd43b12f2ed68302c))
* **deps:** bump nginxinc/nginx-unprivileged ([#1281](https://github.com/runejo/PxWeb2/issues/1281)) ([9522b7c](https://github.com/runejo/PxWeb2/commit/9522b7cec4c0cde0ea536b53b2023edc2546d53f))
* **deps:** bump nginxinc/nginx-unprivileged ([#1339](https://github.com/runejo/PxWeb2/issues/1339)) ([eea973a](https://github.com/runejo/PxWeb2/commit/eea973a6bf00e791ccba37edce0ba81e7460b92d))
* **deps:** bump node from 24.16.0-slim to 24.17.0-slim ([#1338](https://github.com/runejo/PxWeb2/issues/1338)) ([95b6322](https://github.com/runejo/PxWeb2/commit/95b6322b2e123769eaf0617f7dac72654fd22600))
* **deps:** bump sass from 1.100.0 to 1.101.0 ([#1341](https://github.com/runejo/PxWeb2/issues/1341)) ([a51989f](https://github.com/runejo/PxWeb2/commit/a51989f7b685124c134b6ccd00c43f4ae57158e1))
* **deps:** bump SonarSource/sonarqube-scan-action from 8.0.0 to 8.1.0 ([#1311](https://github.com/runejo/PxWeb2/issues/1311)) ([39bbf07](https://github.com/runejo/PxWeb2/commit/39bbf079f8daf32268a8879309468711646f1571))
* **deps:** bump SonarSource/sonarqube-scan-action from 8.1.0 to 8.2.0 ([#1342](https://github.com/runejo/PxWeb2/issues/1342)) ([f252615](https://github.com/runejo/PxWeb2/commit/f25261533208e50fe0c821d280b8dd4a8022e0df))
* **deps:** update Node.js version from 24.14.1-slim to 24.16.0-slim in Dockerfile ([#1315](https://github.com/runejo/PxWeb2/issues/1315)) ([5f9b942](https://github.com/runejo/PxWeb2/commit/5f9b942ac7747e93e64928359d7cb951ffb00dc2))


### :broom: Chores

* Cleanup remaining test output spam ([#1320](https://github.com/runejo/PxWeb2/issues/1320)) ([569512a](https://github.com/runejo/PxWeb2/commit/569512a1f603cf07b636e8469aa35a315d0faf4d))
* Cleanup some spam in tests ([#1286](https://github.com/runejo/PxWeb2/issues/1286)) ([8c71f63](https://github.com/runejo/PxWeb2/commit/8c71f63a0d37a2abc1975e37cb9523ac989892d5))
* migrate from vite-plugin-dts to unplugin-dts ([#1336](https://github.com/runejo/PxWeb2/issues/1336)) ([7d7d0f1](https://github.com/runejo/PxWeb2/commit/7d7d0f1082af6361fb6d19bf4110373e71a9fd12))
* Patch/minor before new layout ([#1291](https://github.com/runejo/PxWeb2/issues/1291)) ([ef05005](https://github.com/runejo/PxWeb2/commit/ef05005cbeec0c681b766d17e041fcbb5c3c00a9))
* Pin most actions to commit SHAs ([#1285](https://github.com/runejo/PxWeb2/issues/1285)) ([e4a952e](https://github.com/runejo/PxWeb2/commit/e4a952e670153d5175c34c41b9ab24f326dc4a70))
* remove Chromatic logo from README Release-As: 2.9.0 ([7ddfb28](https://github.com/runejo/PxWeb2/commit/7ddfb28d53da85b8713df1e9f81f378da58302ba))
* Update all non major dependencies ([#1335](https://github.com/runejo/PxWeb2/issues/1335)) ([d98b998](https://github.com/runejo/PxWeb2/commit/d98b998e0da3df26ff2d8aae50e722f7ec029ca9))
* update html-validate to version 11.5.3 and adjust configuration ([#1337](https://github.com/runejo/PxWeb2/issues/1337)) ([5349f05](https://github.com/runejo/PxWeb2/commit/5349f0514b3172d3baf6c6705e803988271fc086))
* update mabl GitHub action to version 1.16 ([#1348](https://github.com/runejo/PxWeb2/issues/1348)) ([553a2f5](https://github.com/runejo/PxWeb2/commit/553a2f580a1838e292116097cb7322ce2d0390b9))
* Update project minor and patch versions ([#1321](https://github.com/runejo/PxWeb2/issues/1321)) ([3250e13](https://github.com/runejo/PxWeb2/commit/3250e1356492b4046935938c0c13162851025f1f))
* Update workflow to include Node.js version 26.x for builds ([#1324](https://github.com/runejo/PxWeb2/issues/1324)) ([cb94951](https://github.com/runejo/PxWeb2/commit/cb94951eedbf1e7623c03af5e4ffc790104b1972))
* Upgrade project non major dependencies ([#1350](https://github.com/runejo/PxWeb2/issues/1350)) ([953c122](https://github.com/runejo/PxWeb2/commit/953c122031307349d632c843b4993ba331c7e248))
* Upgrade react-router from v7 to v8 ([#1351](https://github.com/runejo/PxWeb2/issues/1351)) ([7201ef2](https://github.com/runejo/PxWeb2/commit/7201ef231273d42ce713eed9752c8820d5014f06))
