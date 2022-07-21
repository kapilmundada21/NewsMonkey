import NoteContext from "./NoteContext"

const NoteState = (props)=>{
    const state = {
        name : "Kapil",
        surname : "Mundada"
    }
    return <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
}
export default NoteState