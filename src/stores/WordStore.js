// import{create} from 'zustand'

// const useWordStore  = create((set)=>({
//     wordList:[],
//     word:'',
//     setWordList:(list)=>{
//         set((state)=>{
//             console.log("State Printing",state)
//             return{
//                 ...state,
//                 wordList:list
//             }
//         });
//     }
// }));


// export default useWordStore 
import{create} from 'zustand'

const useWordStore = create((set) => ({
    wordList:[],
    word:'',
    setWordList: (list) => {
        console.log("Setting word list:", list);
        set({ wordList: list }); // Simplified setter
    },
    setWord: (word) => {
        console.log("Setting word:", word);
        set({ word }); // Simplified setter
    },
}));

export default useWordStore
