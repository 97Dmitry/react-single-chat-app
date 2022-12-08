class LocalStorageService {
  getData(key: string) {
    const saveData = window.localStorage.getItem(key);
    if (saveData && saveData !== "undefined") {
      return JSON.parse(saveData);
    }
    return undefined;
  }

  setData(key: string, data: any): void {
    const saveData = JSON.stringify(data);
    window.localStorage.setItem(key, saveData);
  }

  remove = function (key) {
    window.localStorage.removeItem(key);
  };

  clear = function () {
    window.localStorage.clear();
  };
}

export default new LocalStorageService();
