export const SIMPLE_ACTION = "simple_action";

export function simpleAction(values){
    console.log("dispatched to actions:" + values)
    return {
        type: SIMPLE_ACTION,
        payload: "simple action was dispatched"
    };
}
