class SessionStorageService {
  getData(key: string): Record<string, string> | undefined {
    const saveData = window.sessionStorage.getItem(key);
    if (saveData && saveData !== "undefined") {
      return JSON.parse(saveData);
    }
    return undefined;
  }

  setData(key: string, data: string): void {
    const saveData = JSON.stringify(data);
    window.sessionStorage.setItem(key, saveData);
  }

  remove = function (key) {
    window.sessionStorage.removeItem(key);
  };

  clear = function () {
    window.sessionStorage.clear();
  };
}

export default new SessionStorageService();
