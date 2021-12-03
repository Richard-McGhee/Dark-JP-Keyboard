import Keys from "./KeysCopy"

// This keyboard only focuses on keys that are affected by the language ChannelMergerNode, therefor keys such as Esc and the Function keys are not included in the keyboard

// Key Size Notes:
// Back Space is the first key to be a different sizer and it's slight smaller than a Shift key
// Tab and |\ are slightly larger than normal keys and the same size
// Caps and Enter are nearly identical in size but Enter is slightly larger
// Both Shifts are bigger than Enter and Back Space and are the largest keys, next to Spacebar
// Both Controls are ever so slightly smaller than Tab, the same for all keys on this row save for Spacebar
// Spacebar is by far the largest key on this and any KeyboardEvent, perhaps I should make it its own array but based on the talk with my friend I think it should be fine and easy to manipulate using this data setup

let keyDataAsObjects = [
    // First row of Keys, mirroring the keyboard layout
    {k1: "~", k2: "`", k3: "ろ"},
    {k4: "!", k5: "1", k6: "ぬ"},
    {k7: "@", k8: "2", k9: "ふ"},
    {k10: "#", k11: "3", k12: "あ", k13: "ぁ"},
    {k14: "$", k15: "4", k16: "う", k17: "ぅ"},
    {k18: "%", k19: "5", k20: "え", k21: "ぇ"},
    {k22: "^", k23: "6", k25: "お", k26: "ぉ"},
    {k27: "&", k28: "7", k29: "や", k30: "ゃ"},
    {k31: "*", k32: "8", k33: "ゆ", k34: "ゅ"},
    {k35: "(", k36: "9", k37: "よ", k38: "ょ"},
    {k39: ")", k40: "0", k41: "わ", k42: "を"},
    {k43: "_", k44: "-", k45: "ほ"},
    {k46: "+", k47: "=", k48: "へ"},
    {k49: "Back Space"},
    // Second row of Keys, mirroring the keyboard layout
    {k50: "Tab"},
    {k51: "Q", k52: "た"},
    {k53: "W", k54: "て"},
    {k55: "E", k56: "い", k57: "ぃ"},
    {k58: "R", k59: "す"},
    {k60: "T", k61: "か"},
    {k62: "Y", k63: "ん"},
    {k64: "U", k65: "な"},
    {k66: "I", k67: "に"},
    {k68: "O", k69: "ら"},
    {k70: "P", k71: "せ"},
    {k72: "{", k73: "[", k74: "゛", k75: "「"},
    {k76: "}", k77: "]", k78: "゜", k79: "」"},
    {k80: "|", k81: " Back Slash ", k82: "む"},
    // Third row of Keys, mirroring the keyboard layout
    {k83: "Caps"},
    {k84: "A", k85: "ち"},
    {k86: "S", k87: "と"},
    {k88: "D", k89: "し"},
    {k90: "F", k91: "は"},
    {k92: "G", k93: "き"},
    {k94: "H", k95: "く"},
    {k96: "J", k97: "ま"},
    {k98: "K", k99: "の"},
    {k100: "L", k101: "り"},
    {k102: ":", k103: ";", k104: "れ"},
    {k105: "Dbl Quote", k106: " ' ", k107: "け"},
    {k108: "Enter"},
    // Fourth row of Keys, mirroring the keyboard layout
    {k108: "L.Shift"},
    {k109: "Z", k110: "つ", k111: "っ"},
    {k112: "X", k113: "さ"},
    {k114: "C", k115: "そ"},
    {k116: "V", k117: "ひ"},
    {k118: "B", k119: "こ"},
    {k120: "N", k121: "み"},
    {k122: "M", k123: "も"},
    {k124: "<", k125: ",", k126: "ね", k127: "、"},
    {k128: ">", k129: ".", k130: "る", k131: "。"},
    {k132: "?", k133: "/", k134: "め", k135: "・"},
    {k136: "R.Shift"},
    // Last row of Keys, mirroring the keyboard layout
    {k137: "L.Ctrl"},
    {k138: "Fn", k138Alt: "L.Win"},
    {k139: "Win", k139Alt: "L.Alt"},
    {k140: "L.Alt", k140Alt: "None or Space"},
    {k141: "Spacebar"},
    {k142: "R.Alt"},
    {k143: "R.Ctrl", k143Alt: "R.Win"},
    {k144Alt: "Menu"},
    {k145Alt: "R.Ctrl"}        
]

let keyDataInArrays = [
    // First row of Keys, mirroring the keyboard layout
    ["~", "`", "ろ"],
    ["!", "1", "ぬ"],
    ["@", "2", "ふ"],
    ["#", "3", "あ", "ぁ"],
    ["$", "4", "う", "ぅ"],
    ["%", "5", "え", "ぇ"],
    ["^", "6", "お", "ぉ"],
    ["&", "7", "や", "ゃ"],
    ["*", "8", "ゆ", "ゅ"],
    ["(", "9", "よ", "ょ"],
    [")", "0", "わ", "を"],
    ["_", "-", "ほ"],
    ["+", "=", "へ"],
    ["BacSpace"],
    // Second row of Keys, mirroring the keyboard layout
    ["Tab"],
    ["Q", "た"],
    ["W", "て"],
    ["E", "い", "ぃ"],
    ["R", "す"],
    ["T", "か"],
    ["Y", "ん"],
    ["U", "な"],
    ["I", "に"],
    ["O", "ら"],
    ["P", "せ"],
    ["{", "[", "゛", "「"],
    ["}", "]", "゜", "」"],
    ["|", " Back Slash ", "む"],
    // Third row of Keys, mirroring the keyboard layout
    ["Caps"],
    ["A", "ち"],
    ["S", "と"],
    ["D", "し"],
    ["F", "は"],
    ["G", "き"],
    ["H", "く"],
    ["J", "ま"],
    ["K", "の"],
    ["L", "り"],
    [",", "semi colon", "れ"],
    ["Dbl Quote", " ' ", "け"],
    ["Enter"],
    // Fourth row of Keys, mirroring the keyboard layout
    ["L.Shift"],
    ["Z", "つ", "っ"],
    ["X", "さ"],
    ["C", "そ"],
    ["V", "ひ"],
    ["B", "こ"],
    ["N", "み"],
    ["M", "も"],
    ["<", ",", "ね", "、"],
    [">", ".", "る", "。"],
    ["?", "/", "め", "・"],
    ["R.Shift"],
    // Last row of Keys, mirroring the keyboard layout
    ["L.Ctrl"],
    ["Fn", "L.Win"],
    ["Win", "L.Alt"],
    ["L.Alt", "None or Space"],
    ["Spacebar"],
    ["R.Alt"],
    ["R.Ctrl", "R.Win"],
    ["Menu"],
    ["R.Ctrl"]        
]

let keyDataInRows = [
    // First row of Keys, mirroring the keyboard layout
    [
        ["~", "`", "ろ"],
        ["!", "1", "ぬ"],
        ["@", "2", "ふ"],
        ["#", "3", "あ", "ぁ"],
        ["$", "4", "う", "ぅ"],
        ["%", "5", "え", "ぇ"],
        ["^", "6", "お", "ぉ"],
        ["&", "7", "や", "ゃ"],
        ["*", "8", "ゆ", "ゅ"],
        ["(", "9", "よ", "ょ"],
        [")", "0", "わ", "を"],
        ["_", "-", "ほ"],
        ["+", "=", "へ"],
        ["BacSpace"]
    ],
    // Second row of Keys, mirroring the keyboard layout
    [
        ["Tab"],
        ["Q", "た"],
        ["W", "て"],
        ["E", "い", "ぃ"],
        ["R", "す"],
        ["T", "か"],
        ["Y", "ん"],
        ["U", "な"],
        ["I", "に"],
        ["O", "ら"],
        ["P", "せ"],
        ["{", "[", "゛", "「"],
        ["}", "]", "゜", "」"],
        ["|", " Back Slash ", "む"]
    ],
    // Third row of Keys, mirroring the keyboard layout
    [
        ["Caps"],
        ["A", "ち"],
        ["S", "と"],
        ["D", "し"],
        ["F", "は"],
        ["G", "き"],
        ["H", "く"],
        ["J", "ま"],
        ["K", "の"],
        ["L", "り"],
        [",", "semi colon", "れ"],
        ["Dbl Quote", " ' ", "け"],
        ["Enter"]
    ],
    // Fourth row of Keys, mirroring the keyboard layout
    [
        ["L.Shift"],
        ["Z", "つ", "っ"],
        ["X", "さ"],
        ["C", "そ"],
        ["V", "ひ"],
        ["B", "こ"],
        ["N", "み"],
        ["M", "も"],
        ["<", ",", "ね", "、"],
        [">", ".", "る", "。"],
        ["?", "/", "め", "・"],
        ["R.Shift"]
    ],
    // Last row of Keys, mirroring the keyboard layout
    [
        ["L.Ctrl"],
        ["Fn", "L.Win"],
        ["Win", "L.Alt"],
        ["L.Alt", "None or Space"],
        ["Spacebar"],
        ["R.Alt"],
        ["R.Ctrl", "R.Win"],
        ["Menu"],
        ["R.Ctrl"]
    ]        
]

export {
    keyDataAsObjects,
    keyDataInArrays,
    keyDataInRows
}