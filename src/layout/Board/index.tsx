import React, { useState } from 'react';
import TaskNav from '../../components/TaskNav';
import Calendar from '../../components/calendar';
import TaskSidebar from '../../components/TaskSidebar';

const BoardPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState('columnview');

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="flex">
      <TaskSidebar />
<div >
      <TaskNav onButtonClick={handleButtonClick} activeButton={activeButton} />
      <div className='mr-[16px]'>
        {renderActiveComponent()}
      </div>
</div>

    </div>
  );

  function renderActiveComponent() {
    switch (activeButton) {
      case 'listview':
        return <h1> list</h1>;
      case 'calendar':
        return <Calendar />;
      default:
        return <h1>column</h1>;
    }
  }
};

export default BoardPage;
