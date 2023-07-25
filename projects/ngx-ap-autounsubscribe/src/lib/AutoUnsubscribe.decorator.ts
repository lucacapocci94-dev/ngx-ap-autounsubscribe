const isFunction = (fn: any) => typeof fn === "function";

const doUnsubscribe = (subscription: any) => {
  subscription &&
  isFunction(subscription.unsubscribe) &&
  subscription.unsubscribe();
};

const doUnsubscribeIfArray = (subscriptionsArray: any[]) => {
  Array.isArray(subscriptionsArray) &&
  subscriptionsArray.forEach(doUnsubscribe);
};

interface IParam {
  blackList?: string[];
  arrayName?: string;
  event?: string;
}

export function AutoUnsubscribe(param?: IParam) {
  return function(constructor: Function) {
    const event = param?.event ?? 'ngOnDestroy';

    // Save original event... (For example ngOnDestroy)
    const original = constructor.prototype[event];

    constructor.prototype[event] = function() {
      isFunction(original) && original.apply(this, arguments);

      if (param?.arrayName) {
        doUnsubscribeIfArray(this[param?.arrayName]);
        return;
      }

      for (let propName in this) {
        // @ts-ignore
        if (param?.blackList?.includes(propName)) continue;

        const property = this[propName];
        doUnsubscribe(property);
      }
    };
  };
}
