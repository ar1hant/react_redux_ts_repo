interface addNoteAction {
  type: string,
  payload: string
}

interface delNoteAction {
  type: string,
  payload: number,
}

type actionType = addNoteAction | delNoteAction

const notesReducer = (state: any = [], action : actionType) => {
  switch(action.type){
    case 'ADD_NOTE':
      return[...state, action.payload];
    case 'DEL_NOTE':
      return state.filter((ele : string, index :number) => (index !== action.payload));
    default:
      return state;
  }
}

export default notesReducer;