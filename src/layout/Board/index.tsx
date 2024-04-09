import React, { createContext, useState } from 'react';
import TaskNav from '../../components/TaskNav';
import Calendar from '../../components/calendar';
import TaskSidebar from '../../components/TaskSidebar';


interface ContextValue {
  projectNameState: string;
  updateProjectNameState: (newState: string) => void;
}

export const BoardContext = createContext<ContextValue>({projectNameState: 'پروژه‌های من', updateProjectNameState: () => {}});


const BoardPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState('columnview');
  const [projectNameState, setProjectNameState] = useState<string>('')
  

  const updateProjectNameState = (newState: string) => {
    setProjectNameState(newState);
  };


  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };


  return (
    <BoardContext.Provider value={{ projectNameState, updateProjectNameState }}>
    <div className="flex">
        <TaskSidebar />
        <div>
          <TaskNav onButtonClick={handleButtonClick} activeButton={activeButton} projectName={projectNameState} /> 
          <div className='mr-[16px]'>
            {renderActiveComponent()}
          </div>
        </div>
    </div>
    </BoardContext.Provider>
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
