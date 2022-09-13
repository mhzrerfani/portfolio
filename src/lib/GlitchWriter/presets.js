export const glyphs = {
    nier: '一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何',
    full: 'ABCDĐEFGHIJKLMNOPQRSTUVWXYZabcdđefghijklmnopqrstuvwxyzĄąĆćŻżŹźŃńóŁłАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơư一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何ĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/\\&<-+÷×=>$€£¥¢:;,.*•°·…±†‡æ«»¦¯—–~˜¨_øÞ¿▬▭▮▯┐└╛░▒▓○‼⁇⁈⁉‽ℴℵℶℷℸℲ℮ℯ⅁⅂⅃⅄₠₡₢₣₤₥₦₧₨₩₪₫€₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽₾₿          ',
    letterlike: 'ABCDĐEFGHIJKLMNOPQRSTUVWXYZabcdđefghijklmnopqrstuvwxyzĄąĆćŻżŹźŃńóŁłАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơưĂÂÊÔƠƯăâêôơư1234567890',
    numbers: '0123456789',
    zalgo: '̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ ͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡͏҉',
    neo: '!<>-_\\/[]{}—=+*^?#________',
    uppercase: '1234567890QWERTYUIOPASDFGHJKLZXCVBNM#$%'
};
export const presets = {
    default: {
        steps: [1, 8],
        interval: [60, 170],
        delay: [0, 2000],
        changeChance: 0.6,
        ghostChance: 0.2,
        maxGhosts: 0.2,
        oneAtATime: 0,
        glyphs: glyphs.full + glyphs.zalgo,
        glyphsFromText: false,
        fillSpace: true,
        mode: 'matching',
        html: false,
        letterize: false,
        endless: false,
        fps: 60
    },
    nier: {
        maxGhosts: 0,
        ghostChance: 0,
        changeChance: 0.8,
        steps: 3,
        interval: 10,
        delay: 0,
        oneAtATime: 1,
        glyphs: glyphs.nier,
        fillSpace: false,
        glyphsFromText: true,
        mode: 'clear'
    },
    typewriter: {
        interval: [50, 150],
        delay: 0,
        steps: 0,
        changeChance: 0,
        maxGhosts: 0,
        oneAtATime: 1,
        glyphs: '',
        glyphsFromText: false,
        fillSpace: false,
        mode: 'erase_smart'
    },
    terminal: {
        interval: [25, 30],
        delay: [0, 0],
        steps: 0,
        changeChance: 0.5,
        maxGhosts: 0,
        oneAtATime: 1,
        glyphs: '',
        fillSpace: false,
        glyphsFromText: false,
        mode: 'clear'
    },
    zalgo: {
        delay: [0, 3000],
        interval: [10, 35],
        steps: [0, 30],
        maxGhosts: 4.6,
        changeChance: 0.5,
        ghostChance: 0.7,
        glyphs: glyphs.zalgo,
        glyphsFromText: true,
        fillSpace: false
    },
    neo: {
        interval: [30, 100],
        delay: [0, 1300],
        steps: [4, 7],
        maxGhosts: 0,
        ghostChance: 0,
        changeChance: 1,
        glyphs: glyphs.neo,
        mode: 'normal'
    },
    encrypted: {
        interval: [50, 90],
        delay: [0, 1300],
        steps: [5, 8],
        maxGhosts: 0,
        ghostChance: 0,
        changeChance: 1,
        glyphs: glyphs.uppercase,
        fillSpace: false,
        mode: 'normal'
    },
    bitbybit: {
        interval: [35, 65],
        delay: 180,
        steps: 1,
        maxGhosts: 1,
        ghostChance: 0.1,
        changeChance: 0.7,
        oneAtATime: 'word',
        glyphs: '',
        glyphsFromText: true,
        fillSpace: false,
        mode: 'erase'
    },
    cosmic: {
        steps: [0, 1],
        interval: 30,
        delay: [400, 2400],
        ghostChance: 0,
        changeChance: 0.3,
        maxGhosts: 0,
        glyphs: 'QWERTYUIOPASDFGHJKLZXCVBNM',
        glyphsFromText: false,
        fillSpace: true,
        mode: 'erase'
    }
};
