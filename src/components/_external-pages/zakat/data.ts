interface ZakatData {
  label?: any;
  type?: string;
  title: string;
  name: string;
  id: number;
  isResultState: boolean;
  handleSubmit: (
    e: any,
    amount: any[],
    handleAmount: any,
    inp?: any,
    indexEdited?: any,
    prevAmount?: any,
  ) => void;
  formType: string;
}
export const Zakat: ZakatData[] = [
  {
    label: 'zakat.moneyAmount',
    type: 'money',
    title: 'zakat.moneyTitle',
    name: 'zakat.moneyName',
    id: 0,
    isResultState: false,
    handleSubmit: (e, amount, handleAmount) => {
      const { val } = e.target.elements;
      const newAmount = amount.map((item: any) => {
        if (item.type === 'money') {
          item.value = val.value;
          item.amt = Math.round(Number(val.value * 0.025) * 100) / 100;
          item.isAdded = true;
        }
        return item;
      });
      handleAmount(newAmount);
    },
    formType: 'amount',
  },
  {
    label: 'zakat.silverAmount',
    type: 'silver',
    title: 'zakat.silverTitle',
    name: 'zakat.silverName',
    id: 1,
    isResultState: false,
    handleSubmit: (e, amount, handleAmount) => {
      const { val } = e.target.elements;
      const tempValue = parseFloat(val.value.replace(',', '.').replace(' ', ''));
      const newAmount = amount.map((item: any) => {
        if (item.type === 'silver') {
          item.value = tempValue;
          item.amt += Math.round(Number(tempValue * 2.72 * 0.025));
          item.isAdded = true;
        }
        return item;
      });
      handleAmount(newAmount);
    },
    formType: 'silver',
  },
  {
    label: 'zakat.goldAmount',
    type: 'gold',
    title: 'zakat.goldTitle',
    name: 'zakat.goldName',
    id: 2,
    isResultState: true,
    handleSubmit: (e, amount, handleAmount, carat, indexEdited, prevAmount) => {
      const { val } = e.target.elements;
      const nisab = 0.025;
      if (indexEdited === -1) {
        const newAmount = amount.map((item: any) => {
          if (item.type === 'gold') {
            const obj: any = {};
            const tempValue = parseFloat(val.value.replace(',', '.').replace(' ', ''));
            obj.value = tempValue;
            switch (carat) {
              case 12: {
                obj.amt = Math.round(Number(tempValue * nisab * 105));
                break;
              }
              case 14: {
                obj.amt = Math.round(Number(tempValue * nisab * 123));
                break;
              }
              case 18: {
                obj.amt = Math.round(Number(tempValue * nisab * 158));
                break;
              }
              case 21: {
                obj.amt = Math.round(Number(tempValue * nisab * 184));
                break;
              }
              case 22: {
                obj.amt = Math.round(Number(tempValue * nisab * 193));
                break;
              }
              case 24: {
                obj.amt = Math.round(Number(tempValue * nisab * 211));
                break;
              }
            }
            obj.carat = carat;
            item.amt += obj.amt;
            item.custom.push(obj);
          }
          return item;
        });
        handleAmount(newAmount);
      } else {
        const idx = amount.findIndex(x => x.type === 'gold');
        const temp = [...amount];
        const tempValue = parseFloat(val.value.replace(',', '.').replace(' ', ''));
        temp[idx].custom[indexEdited].value = tempValue;
        switch (carat) {
          case 12: {
            temp[idx].custom[indexEdited].amt = Math.round(Number(tempValue * nisab * 105));
            break;
          }
          case 14: {
            temp[idx].custom[indexEdited].amt = Math.round(Number(tempValue * nisab * 123));
            break;
          }
          case 18: {
            temp[idx].custom[indexEdited].amt = Math.round(Number(tempValue * nisab * 158));
            break;
          }
          case 21: {
            temp[idx].custom[indexEdited].amt = Math.round(Number(tempValue * nisab * 184));
            break;
          }
          case 22: {
            temp[idx].custom[indexEdited].amt = Math.round(Number(tempValue * nisab * 193));
            break;
          }
          case 24: {
            temp[idx].custom[indexEdited].amt = Math.round(Number(tempValue * nisab * 211));
            break;
          }
        }
        const tempAmount = amount[idx].amt - Number(prevAmount);
        temp[idx].amt = tempAmount + temp[idx].custom[indexEdited].amt;
        temp[idx].custom[indexEdited].carat = carat;
        handleAmount(temp);
      }
    },
    formType: 'gold',
  },
  {
    type: 'stocks',
    title: 'zakat.stocksTitle',
    name: 'zakat.stocksName',
    id: 3,
    isResultState: true,
    handleSubmit: (e, amount, handleAmount, inp, name, editedObj) => {
      const nisab = 0.025;
      const { val, SAR } = e.target.elements;
      const obj: any = {};
      if (editedObj && editedObj.index > -1) {
        const { index, prevAmount } = editedObj;
        const idx = amount.findIndex(x => x.type === 'stocks');
        const temp = [...amount];
        const tempAmount = amount[idx].amt - Number(prevAmount);
        temp[idx].custom[index].value = Number(val.value);
        temp[idx].custom[index].amt = Math.round(Number(val.value * nisab * inp));
        temp[idx].custom[index].name = name;
        temp[idx].custom[index].number = inp;
        temp[idx].amt = tempAmount + temp[idx].custom[index].amt;
        handleAmount(temp);
      } else {
        const newAmount = amount.map((item: any) => {
          if (item.type === 'stocks') {
            obj.value = Number(val.value);
            obj.number = Number(inp);
            obj.name = name;
            obj.amt = Math.round(Number(val.value * nisab * inp));
            item.value += obj.value;
            item.amt += obj.amt;
            item.custom.push(obj);
          }
          return item;
        });
        handleAmount(newAmount);
      }
    },
    formType: 'stocks',
  },
  {
    type: 'mutual',
    title: 'zakat.mutualTitle',
    name: 'zakat.mutualName',
    id: 4,
    isResultState: true,
    handleSubmit: (e, amount, handleAmount, inp) => {
      const nisab = 0.025;
      const { val, SAR } = e.target.elements;
      const newAmount = amount.map((item: any) => {
        if (item.type === 'mutual') {
          item.value += Number(SAR.value);
          item.amt += Math.round(Number(val.value * nisab * inp));
        }
        return item;
      });
      handleAmount(newAmount);
    },
    formType: 'mutual',
  },
];
