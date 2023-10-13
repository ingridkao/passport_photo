// w(unit: 1mm = 0.1cm)
// h(unit: 1mm = 0.1cm)
export const PhotoGap = 20

declare interface FormatTypes {
    [key: string]: {
        key: string;
        name: string;
        desc: string;
        w: number;
        h: number;
        row: number;
        col: number;
    }
}
  
export const format:FormatTypes = {
    'p1': {
        key: 'p1',
        name: '1吋證件照',
        desc: '駕照、行照、身障手冊',
        w: 28,
        h: 35,
        row: 2,
        col: 4
    },
    'p2': {
        key: 'p2',
        name: '2吋大頭照',
        desc: '護照、身分證、台胞證、外僑居留證',
        w: 35,
        h: 45,
        row: 2,
        col: 3
    },
    'c2': {
        key: 'c2',
        name: '2吋半身照',
        desc: '健保卡、履歷照、學生證、國際駕照、巴氏量表',
        w: 42,
        h: 47,
        row: 2,
        col: 3
    }
}
