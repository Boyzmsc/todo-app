// 데이터 추가
const addItem = (state, itemAdded) => {
    const obj = { completed: false, item: itemAdded };
    localStorage.setItem(itemAdded, JSON.stringify(obj));
    state.todoItems.push(obj);
}

// 지정 데이터 삭제 (로컬 스토리지, 리스트 배열)
const removeItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

// 지정 데이터 completed 속성 갱신 (로컬 스토리지, 리스트 배열)
const completeItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    // 로컬 스트리지의 데이터 갱신 -> 제거 이후 추가
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

// 데이터 초기화
const clearAll = (state) => {
    state.todoItems = [];
    localStorage.clear();
}

export {addItem, removeItem, completeItem, clearAll}