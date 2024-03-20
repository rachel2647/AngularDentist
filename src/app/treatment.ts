import patient from "./patient";

export default interface treatment {
    id: number,
    patient: patient,
    date: Date,
    duration:number
}