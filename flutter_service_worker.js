'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9b8ec58262fb69f60552602678554b4e",
".git/config": "1fb5d5b68b4e1e2061ba5fdbde7ce5c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "192ef87551999f4e5ca2dfe817bc9b70",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9c06e54c9a584ab3e0633a6830e3d237",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5af1985e9f6b9ae7bb61bd122484c45",
".git/logs/refs/heads/main": "ac592a22fd7541afcc3c9e8b16f4ff3e",
".git/logs/refs/remotes/origin/main": "e89affa74c9e97cf8183824c7482d3fb",
".git/objects/01/a1955cd10c01ce640a6dffd6cf4236a6e320aa": "6ca7df36698fd0c6bc0fba8d0cf14ccd",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/d77b6c20d6bf39bd2955259ec420f9ce8314cb": "593996d26c7d3e03b9c0b35ae2c5d758",
".git/objects/06/51367318b77504530f0c0ea6ee0965b924eaf4": "5c08b9ffca35b3f26dc8fdcc6e0a9b2c",
".git/objects/0a/8dadbdad333fa63a309f803d07d0994e8116ac": "d21f66fbf80f30ddd147580e4284d66c",
".git/objects/0b/1837311fe2807babf628d345e0d6658b4b2c81": "1b301de335a7c2d8683ae00cc61a86cc",
".git/objects/0b/ad45dbdd1b0312ff7095799ed226d7a8d8db57": "f2309c652198819e53e42f6959052084",
".git/objects/0c/2108c9f41e089c0d9878946ba8efd9f918b2e8": "35de7a6a06ca4c54e7fcda60f869985f",
".git/objects/0c/b927aec34a5fa78122df7eb72d0b983d3dfee9": "243c529116e4937d5e06dcd9feae756d",
".git/objects/11/7a308aa48b25b1d0554c402041e5cd1df3cda9": "9b38a4e5fcdc0ee7909e26e859bb0bc9",
".git/objects/13/0cf583f9a5ee9da24a34c668be8f295e299d64": "aec8d8ef96a9610eb5ba1ed062c0cced",
".git/objects/13/e084b535f951720a696f52864914f3727a41b5": "9fb4f4d4798472ec258700d0355ab261",
".git/objects/15/4a465602ba30c602b2c7a62ebe971e56d583dd": "96fd350ce4503f4f96b4bf90faba9353",
".git/objects/1a/ab1f4540dad30d40c97edf01487b951abdc49d": "e97fcf41dc28f65f21cee7448bf9dac0",
".git/objects/1c/482025b2cc310e46491b4e7c15926eeb80dbeb": "15b1bfa1e6533612b2f57ea012b07232",
".git/objects/1c/7286ced287a05afe0ebd1db981289b89fa8d40": "01916e6ececfcbc13e2619709d79bdcb",
".git/objects/1c/e9f30d72fbbc39db3b4b6937059a9dcccd4e2f": "ac44a8ea8ae12661fa342771824ea418",
".git/objects/1c/f1bb36bfb995a92def66fad26a69c347af69fd": "42f852acb33648f4da435d77e6897997",
".git/objects/1d/63f733d4ebedb466946c7aff9157c822ab3e2b": "c64ee0cf206ad2495663409b51a2e0e3",
".git/objects/1f/cb3453765c4c548c82aaf256852b6b20189c44": "431f2b967fb74668cd4d69ff34a8e221",
".git/objects/22/934d69add68e0dcf623a98ed60b93267e42821": "8ae4698fd75328b990eed5522532a71f",
".git/objects/23/1539e671dc450dc50e312301d15abf5e59ce05": "b47e38f4bd3a29613a76ccd16884179b",
".git/objects/24/1bc760ef578480645bb01f94432a3ec498163f": "5214198aac2312ed435735a8ca817e0c",
".git/objects/24/b62085e312dbeffa81e45822586be2c8d22a93": "3ebd90d8d7d5a40f367ff7e6b8ea50ed",
".git/objects/25/141f113b74317d0c8e13d97f9c4b45c9d44508": "82dc16a12661b24948dd7d7a7771fe74",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/061286830d5f4ed445a0dcb6b3e64cd37f19e5": "36fbeecf5c9b15af2d87c7f7180892a3",
".git/objects/28/a8877591e67564da5e9977bba6958cc16c589c": "214b49ab78ed926ab5724375bbd46f9e",
".git/objects/29/b9bc01462af34e600029870cb91e27eb93766f": "5fab260ccbaf6c0e435547c14ac8c10d",
".git/objects/2d/1206dcc8ccf92a3af8712dce32b5f9a45e105a": "2c5220d1a723cf67b03d7d769bc2fee1",
".git/objects/2d/bcab46bb4410ef56ccdc22357317d25465ee08": "40d611abf51d45817b3ebc5c2f01bd11",
".git/objects/2f/a993523c0baeb75cf0880f14d32be66e5b9070": "93d6eca3b526b40c86e76c32d398ef23",
".git/objects/30/c02757838f65e29b5fa156b45bcc596d913b60": "6caa4510e51032e7352bcb69bd269b5c",
".git/objects/31/7448c2d38eb09574b10a11fbb811841e6a6080": "64caa74347872e8059395eb4f26b7ba6",
".git/objects/31/822819790b7c50f609b502e1f85c860affb879": "6e7db7c0b63d2020caeb3a71970c4939",
".git/objects/32/57e894411cdc06ab992b9d2acd5a1181e0e296": "e6d9f2f63dd49bbae5fd71786b3ea8f7",
".git/objects/34/4df95095f5b84550fcc8a37dda3266afb94b8f": "5b41aef0eb87b77847009743dc0010bb",
".git/objects/34/5153e22a29c84ffee1dd17a168c077fff8d9c4": "77084fa3f7450b58344da80be0e98738",
".git/objects/37/73555562eb8b15ad06dfa16aad8979f0665f54": "2e98e8b74165acf3392aade73ce04834",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/165d8c2e185b12dd5d90a71225ba3b0665a4ef": "ddc362315c7a9622a30047ee3eee2c27",
".git/objects/41/51dd5ac47f3819244c2ac4575ec278df06404c": "dc4a346ac37c50b9681270d686958802",
".git/objects/42/b47af06ded08213003122ff9a221fff92140a4": "08017f744ee8f159297a1f191a4a5f60",
".git/objects/44/08eb34baf1a850a73153afe4b4ff43a66f3269": "3fe31ee5e1dde8b4c0cc875d16136bb8",
".git/objects/44/9d58d2b7adbab264da4ef63d6a10289ccfab7e": "180cd296654c16cd546f25603e3cea7f",
".git/objects/46/1dbe384215831360c686e9a2365ac09c11c4d1": "65c06f1dee164dc4cce27bc769f7ccd7",
".git/objects/4e/235fbe7a991487b067e1e6427a83c4883a8e90": "29c06bff42021e5ddb9aa1f676f14d77",
".git/objects/4e/29ece3a510fba660ae9c2d793a20e5b4153361": "b03691b93874d62d50dbfaffb8386c2d",
".git/objects/56/1354316d38cdd841fa54f6d4a97bc854dff00b": "df102b7ef103ab2d0335f15d12eb1aaa",
".git/objects/57/0ca9fed510701f2b0ee80abf672a62a04384e8": "ad06a3da8f4aa2eeba21d4229083c507",
".git/objects/59/ba14aeb79e1acbabecfa781d25160d8a47945c": "c7b356fb087f161aef5d20a4aa8fd4ca",
".git/objects/5d/21f24dc0d84942aca8fb07ec993fdcb2fc0440": "197e5d0cf5994e9eeb63b2644bbce526",
".git/objects/5d/6fc7336f1c49c6da5c8962a4b56e97ef42b0be": "8dbadf13d73701a69aff93d2c29ccdb7",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/61/973d354515e8529e57322b7462753aba93a4bb": "92395870413e47156fcfc26296ef47ef",
".git/objects/62/5bef94271ccc7d626354d8e82ed7a4fcef703a": "fa04beba56f1681770a13c8fbb0101b5",
".git/objects/63/050051d5420057e535ac18efcaa987161add69": "a535e526d30db9bd19be554b0d55a604",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/ae991bc824f3df8f174b2474ce6e7a44ec9413": "87e930c1e67a722b9843b38213a8a4ea",
".git/objects/66/fc7286aba5d6db991d30932cb9028f2d37a593": "beb3d773128e8c4106584421138c520f",
".git/objects/68/6ac376397e82f4a142981bde786eae2cbd8fd4": "9442f1c6beffa00a9b34732a3ff57d09",
".git/objects/68/bf100be6c370108fd5ef37333055b774aefe42": "96fc6ab180070fde41c0867b01196ca1",
".git/objects/69/647edee1e1878eec16a51eb8e7751793033b6f": "8c942e2379afc7b1498ab0db85193697",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/335b98f6b7fb7a9d1dd4e1763e28085848d654": "f544511ee7c59012748d12703011a395",
".git/objects/72/cf4e988f7c466f65d186a778f7b35c338b21af": "6d3143cf7f0d7b1fefa5c9f6e0a3ac89",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/c74bdc41a7778ac27ad27dda4c93f96c135c4a": "04848fb4c6479d46f6237a610973e357",
".git/objects/76/2b9a7982c57dc1a0ea4d12f55eb7454301c50b": "77928b4a5bff327f494a6382809fe816",
".git/objects/76/a7cfd0ce91595595c8e0a3046b02ddbe604727": "6b4def3565112fede179c195f31ca527",
".git/objects/76/bc78d1c408a43a988a3ec86a93d39058167229": "7a283647ee1450cf61530f79d0208734",
".git/objects/7a/bc7c16ad9f21d81ab410ba5836f0151793fd93": "7455a5858857d7ea9100ee95b2b2e9df",
".git/objects/81/7fb43eaca2912d462e44b1fe1c133aa3ebb12a": "9053cdb5b37bbbb88a834343aa46b55a",
".git/objects/83/4f5531a5956d64a6b822daa9fc7e9abf092ad2": "d6b5eea474dc7b503c286a3c91dea1e3",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/2aceb47170260257eb92898e7c0200304190b2": "9dacf61fde69bc011443eab1ba88f7f1",
".git/objects/88/96b7b6dc9851fa3607842415b782c3fa163658": "5ca88693173418b09b34feda73bb19c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/9e1e31e41b2d9404349ff9e4ea1ffd265a9c0e": "3c25fa6a6340f59bb15bf0d903c0f687",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/91/740dc7f366290bf2f98b7295e5610b9613d967": "c2ca06e91994a548c6d03a7f2343f5e5",
".git/objects/96/3c7dcf14f792c6117406250175035e6a46b48f": "8a9d03da5217e0367e7db5766a86785c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/a0fbdb08c53d08d3875a6b1d3344bc87c6f00e": "02a8269f00aa46315ac380939edac03d",
".git/objects/9b/74188f80b314930549fb3f1bd3dc1f7a8748c1": "38fc4a2a8df9e858b4795e3ba68e47c3",
".git/objects/9b/f9f9b71cd5f6236273b15a3b3687644150f16d": "20d856e7c9736e9721d45a2febff9f2a",
".git/objects/9d/26cc72999907b48638420b08bb2be30f0c3d25": "f892458bf249bf2307ef42c445f10e3a",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a0/abd8238b4b779786c6f08f28f66dc85b86bd61": "adf69198dec75b5be4637bd586cdf8c1",
".git/objects/a1/2819235dce3f65dc67dea732dcd2bdee1d1b4e": "8452178746c831aa23d1de7d073fa3f0",
".git/objects/a4/bfd26653c4bfccb34ad743c20419f041367bd2": "6a92be878c977185f1d3943264bf7281",
".git/objects/a5/4842981876a189040a8a2f4db05ca859579563": "6d96ee70effd976a2d521e0e75603724",
".git/objects/a5/a9354a6cb5dd710c64b414a584b0af5a677883": "4dac0059fc2bbaa0488ab73593b09f18",
".git/objects/a7/1a026953e4b1d56fd277d0d7aac086ea343c6b": "4fa27e3de92a785a969f66dd3fb79b66",
".git/objects/ac/01ae252a3e3ddf0690bc3603c34b78aff5e43c": "4b570cea4173b29778a2fd89fcfaf33b",
".git/objects/ad/bb09cd78df6d9700908a90c4380e94763ffe18": "03487c091da970855426f660e7bbc1f1",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/1cc565fc32ae67d1f855c0cd32acf2d443635f": "78dc111999215553efaa9f20bb9784af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/ff17ccb111dd86353d1ef63473d22d633703bf": "5f946411a4e2aef610ff34289049d852",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/90912fdbf0f0fc1bfeaf091b4f7cd1478c03ea": "31913fbfe8201fe93cbfc1b6e3c1c067",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7b22379ddbda774ac49b8f09b279f6618b93b9": "f7257c7550ae61092ae309fb7afe6ed5",
".git/objects/bb/eeaf2a944175451f3d5da630374e6180ecef88": "ab23c909dbdeb7db12e3b48d7f7f515e",
".git/objects/bd/b580ec2b671b138aa778340be2113d4ff967b6": "ef85a05a56eb5d4c7f756aeb89fdd510",
".git/objects/be/42390099990d71dd623f7b37027f19496246a1": "0880b3e9562b642ede953f1ed43c9bb4",
".git/objects/c2/91242dc9f23f259a666eb40b0ecbe09fd48312": "f8d398243c6d3576eaa61fd684a026fb",
".git/objects/c3/dcc2dc7ddcd41a2c7f48933950f95094099b18": "a58920503ab746cb16a1535482c9a179",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/ccd9c8836e1ef9d250eed56f4e90ecfb1c827b": "cd8b9574b7c4c3615b278aabc9b15fd0",
".git/objects/c5/3b249a8219f3a48a96c6e18a14cef7d875207c": "78091d89d75e107cf848595f46c1f35f",
".git/objects/c5/5a9c0c721cded4d4a9f15ff669bcfa53a56417": "dcf130cbe0d5604382545bd9697fa0f3",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/ac1acd7423a8f8524eb528e52cf39645a9108d": "34a7192b184f26d97cdf9b88894b82c7",
".git/objects/c6/e3bdd9b34990d8a16c48016487e367389565d8": "ce10840f1c195999d1f7ac57c1aaa2e0",
".git/objects/c9/7610040de9b1965695769797b75069d7647ab9": "088abb2c7dfaa0b94bf9ad90c81fe754",
".git/objects/c9/7a4e05f23e1bad972df557312562bd46bbf450": "edff089f0fa8604fb87c4492ce2949bb",
".git/objects/cc/e780e4fa7d2fecdcc4cd2eb8d4429503116439": "1750c53a6d1ed4b7d3257f081fb99fda",
".git/objects/d2/4657daa97a42d3f86efa2cf228af7e3bbe3336": "8318df1ff4a543ce5fe489649650af63",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6c6354f2077d3589ca7a944378c56632b1977d": "2f3947d14b7c957b2b21ec31b0d3b0cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/63b7fda11d6bbcb1070ba2ba5237d68d0bd793": "d70a00d6dcf7810b140155e3bf9eb1e1",
".git/objects/e0/11366d9106d51d5c6bd0aa1e7286fc63001c2f": "797d89420708f4d173871182896749ea",
".git/objects/e4/2a015ebaeec547d223dd7fa23e7d339092c7c5": "fcb0ae89cd2b2d51ac9c9445f2a2ebb5",
".git/objects/e5/820a4d8d4fea97161b1420250c2805d1254451": "2024ae0e955a8c93dcfe96495fe9df84",
".git/objects/e6/4b51140e1bbfdf4f2a9308148d492381f0f958": "88e1c66ecbbe66764e8e04feb68e3f19",
".git/objects/ea/b745b02be6a5d4d5ee3c3b1190ce18a20fc840": "e217d8a656cf57f9a01fd21c56b03bd3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/0857ab05f40012da4a3014b3a401cc95f428ae": "59e267968119b07d6ad3ccdc6d5352f1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/56317bbd107f19c0b6ed8cd72e03b4340d01f8": "26fcc6942bd49fea3b16073b9fbc5ee4",
".git/objects/f9/0e6ea31577f98f20995071b2cce1ab28975ead": "4c1d0dad25b479d64350b91a1d0df29e",
".git/objects/f9/9ba957889e4aef9cc16b671d91503651a53c39": "1f627798036b06f2faf65c26f967c6ac",
".git/objects/f9/b47a0b611a7bd8a9b89f6695db401eb8c6bc99": "62b6695f3a257013c38a04a6dfeb2d15",
".git/objects/fe/66e149390de85e8c0a8ec6b889bc56c1670570": "10f9aec795d1b332bec30c139be90750",
".git/refs/heads/main": "ea00bf60204ce315aac2328d0edf264d",
".git/refs/remotes/origin/main": "b45d685a7d99d239f28b691f5b8f8382",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/avatar/avatar.jpg": "bb5d1279a139a1894ce0a1aa549fe408",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "fb81775478317979292b1ab218c3c32f",
"assets/images/certifications/c.svg": "7b53ae6ec860e2af5cbe9f96524f4b63",
"assets/images/certifications/ipa.svg": "2cf9d2d24d9b0d7a53a6eb7559c14cac",
"assets/images/certifications/jlpt.png": "89591de6abce8dacd9da3a884d338f5e",
"assets/images/certifications/uipath.svg": "ecf5a65c5eb780d723fe863cf816fc09",
"assets/images/projects/calendar.png": "cc26e78f768326933a1046e1479f820b",
"assets/images/projects/chat.png": "d90cb04bff4aca49134df34959ec0130",
"assets/images/projects/portfolio.png": "8c0c20287c109b0fcf900d03f51e182e",
"assets/logo/b-logo.png": "0cb8a6171e5620ace3a4f69188f0a196",
"assets/logo/c-logo.png": "29b1d3d60e3981eaa12f0417ea53e356",
"assets/logo/cloud/amazon.svg": "49d6b6df201b0bd40c4cd15c281d6189",
"assets/logo/cloud/azure.svg": "b237c383de4370b13a4f5c151f0d0d65",
"assets/logo/cloud/docker.svg": "5b513fa5b9b2261d02d3700103337e3d",
"assets/logo/cloud/firebase.svg": "4089f6b40beddeba9986baa530e787c6",
"assets/logo/cloud/github.svg": "2008898c7d57a1d946ee8aff207a85b8",
"assets/logo/cloud/gitlab.svg": "9471848ccade0f8fdd8104430ec43a98",
"assets/logo/databases/mysql.svg": "90aaea9211db344692ab8b031e5e61b8",
"assets/logo/databases/postgresql.svg": "67e22dcdc94b4d4e2f2f520ac02619cb",
"assets/logo/databases/sqlserver.svg": "85aa7f1d48b6583028a05e5f71e8ce52",
"assets/logo/frameworks/android.svg": "8d85a5cd74608556e776c9b17962c8ff",
"assets/logo/frameworks/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/logo/frameworks/jquery.svg": "e18d5b330d048c7d09df362025aa9880",
"assets/logo/frameworks/laravel.svg": "0efb2bfdb58affe69abaee79369a1143",
"assets/logo/frameworks/nodejs.svg": "7a1c7f9684bb93bc8ae4eb5687282995",
"assets/logo/frameworks/react.svg": "8ef9dd2c4d01018d5ad7a9e163a2b0aa",
"assets/logo/frameworks/vuejs.svg": "5e55363926f790c15f4582330db55a78",
"assets/logo/ides/android-studio.svg": "751bfbff3cc646703697455d91766c4b",
"assets/logo/ides/vscode.svg": "0ec516f71773d73edcdf57252016c869",
"assets/logo/logo.png": "6739a35947b284bbbbfc41b323a2963a",
"assets/logo/others/git.svg": "0192560034c6b7970c926e75dff17fdf",
"assets/logo/others/json.svg": "f2a9f8a4b40ae3a4d5df0996b8495e91",
"assets/logo/others/npm.svg": "045f450caa1b2cad3b9886f3abdae36f",
"assets/logo/others/yarn.svg": "143dae82512f10fd85cbaa20d4c71937",
"assets/logo/programming_languages/csharp.svg": "5556e44d5c68560f3cc825af5a6b22a9",
"assets/logo/programming_languages/css.svg": "152c7fe46af2e912b746e392a945a6d8",
"assets/logo/programming_languages/dart.svg": "0827c5377e148c6f6e7a80b16af19ea9",
"assets/logo/programming_languages/html.svg": "843008955995537ec201c220c87cedbc",
"assets/logo/programming_languages/javascript.svg": "2ad7388afb1c2645a87a53724e2d4f36",
"assets/logo/programming_languages/php.svg": "022e0e816f3508c1d9575e5dc8a18511",
"assets/logo/programming_languages/python.svg": "9571895b144e28775fd433e6e51b073e",
"assets/logo/programming_languages/sass.svg": "e54b5779ce8f5a3dcc9f0050cc8aeda3",
"assets/logo/programming_languages/typescript.svg": "9b9b78cce9a07a0c64ce77d8b7011c3a",
"assets/logo/programming_languages/visualbasic.svg": "7cdddeb0643238fbebd331a6d6abaef4",
"assets/logo/social/facebook.svg": "8eab525c20c6fd53463e698e7ba5d612",
"assets/logo/social/github.svg": "2008898c7d57a1d946ee8aff207a85b8",
"assets/logo/social/linkedin.svg": "b10794f1d2cfb39d57b3216e801dd9a7",
"assets/logo/social/slack.svg": "01e905968008d0c1ade0908240c771a8",
"assets/NOTICES": "c3e2584bc27ae0640ee8014e707a923a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "0bc6a0097abda57bde17a7289d916789",
"files/CV/jp/%E5%B1%A5%E6%AD%B4%E6%9B%B8_%E3%83%AC%E3%82%BF%E3%83%B3%E3%83%93%E3%83%B3_2025.pdf": "50c6d3311111592ea823f49009841f5f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d090b78101a8efc34c4a383d29aebf29",
"icons/apple-touch-icon.png": "e39a82539772b826e44d287008c9f339",
"icons/Icon-192.png": "b7dc4a9329dc1bd8c76044cefb0cb16e",
"icons/Icon-512.png": "0b6542fabd32ce259a18b5e91204a661",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "20c33098a8697cf30069e605a088e9cb",
"/": "20c33098a8697cf30069e605a088e9cb",
"main.dart.js": "a7b01da9ee23499fb2617756e91e8646",
"manifest.json": "8cdde40dfcbfdef7c26350e68bcedc7f",
"version.json": "356d16377e065e79a50653567a86461f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
