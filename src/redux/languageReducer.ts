export interface LanguageState{
    language : 'en' | 'zh';
    languageList: {name:string,code:string}[]
}

const defaultState :LanguageState={
    language:"zh",
    languageList:[
        {name:"中文",code:"zh"},
        {name:"英文",code:"eh"}
    ]
}

export default (state=defaultState,action:any)=>{
    return state
}