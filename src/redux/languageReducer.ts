export interface LanguageState{
    language : 'en' | 'zh';
    languageList: {name:string,code:string}[]
}


// type:"chang_language",
//             payload:e.key


const defaultState :LanguageState={
    language:"zh",
    languageList:[
        {name:"中文",code:"zh"},
        {name:"英文",code:"eh"}
    ]
}

export default (state=defaultState,action:any)=>{
    console.log(state)
    if(action.type==='change_language'){
        const newState = {...state,language:action.payload};
        
        return newState;
    }
    return state
}