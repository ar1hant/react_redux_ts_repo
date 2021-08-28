const addNote = (str : string) => {
  return{
    type: "ADD_NOTE",
    payload: str
  };
}

const delNote = (id : number) => {
  return {
    type: 'DEL_NOTE',
    payload: id,
  };
}

export { addNote, delNote };