import { Observable } from '@nativescript/core';

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.items_unit = [
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
  ];

  viewModel.onSelectedItem = (args) => {
    let value = args.object?.selectedValue;
    let index = args.object?.selectedIndex;
    console.log('Picker > closed ', index);
    console.log(
      'Picker > closed > get by selectedIndex ',
      viewModel.items_unit[index].name
    );
    console.log(
      'Picker > closed > get by selectedValue ',
      JSON.stringify(value)
    );
  };

  return viewModel;
}
