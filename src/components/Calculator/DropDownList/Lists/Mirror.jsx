import { Menu } from 'antd';


const mirrorMenu = (
  <Menu
    items={[
      {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
          {
            key: '1-1',
            label: (<div><input type='checkbox' /><span>СЕРЕБРО AGC GLASS</span></div>),
          },
          {
            key: '1-2',
            label: (<div><input type='checkbox' /><span>БРОНЗА AGC GLASS</span></div>),
          },
          {
            key: '1-3',
            label: (<div><input type='checkbox' /><span>ГРАФИТ AGC GLASS</span></div>),
          },
          {
            key: '1-4',
            label: (<div><input type='checkbox' /><span>СЕРЕБРО +ПЛЕНКА 641</span></div>),
          },
          {
            key: '1-5',
            label: (<div><input type='checkbox' /><span>БРОНЗА +ПЛЕНКА 641</span></div>),
          },
          {
            key: '1-6',
            label: (<div><input type='checkbox' /><span>ГРАФИТ +ПЛЕНКА 641</span></div>),
            children: [{
              key: '2-1',
              label: (<div className=' w-[30px] h-[30px] rounded-2xl bg-green-500'></div>),
            },
            {
              key: '2-3',
              label: (<div className=' w-[30px] h-[30px] rounded-2xl bg-red-500'></div>),
            },
            {
              key: '2-4',
              label: (<div className=' w-[30px] h-[30px] rounded-2xl bg-blue-500'></div>),
            },
            {
              key: '2-5',
              label: (<div className=' w-[30px] h-[30px] rounded-2xl bg-yellow-500'></div>),
            },
            {
              key: '2-6',
              label: (<div className=' w-[30px] h-[30px] rounded-2xl bg-indigo-500'></div>),
            },
          ]
          },
        ],
      },
    ]}
  />
);

export default mirrorMenu