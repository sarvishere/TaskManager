import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import { ChangeEvent } from "react";
import Icon from "../ui/Icon";
import useAddWorkspace from "../../hooks/useAddWorkspace";

const CreateNewWorkspace = ({visible,onClose}) => {
  const [stage, setStage] = useState(1);
  const [workspaceName, setWorkspaceName] = useState("");
  const [initials, setInitials] = useState("");
  const [selectedColor, setSelectedColor] = useState('gray');
  const {addWorkspace}=useAddWorkspace();

  //The following function will get the initials from the input name and changes the workspaceName and initials states as a result
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkspaceName(e.target.value);
    const initials = e.target.value
      .split(" ")
      .map((word) => word.charAt(0))
      .join(" ");
    setInitials(initials);
  };
//Handle clicking on the continue button
  const handleContinue = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    stage < 3 && setStage((s) => s + 1);    
  };

//Change the selected color state when the color button is clicked 
  const handleColor = (color:string) => {
    setSelectedColor(color);
  };
//Handle clicking on the LeftArrow button
  const handleBackBtn=()=>{
    stage>1 && setStage((s)=>s-1);
  }
// On Submit, this gets the name and selected color states and calls the addWorkspace method which posts the data to the server
const handleSubmit=(e:FormEvent)=>{
  e.preventDefault();
const data={name:`${workspaceName}`,
color:`${selectedColor}`
}
stage===3 && addWorkspace(data);
}
  return (
      <div
    className={`${
      !visible && "hidden"
    } fixed h-screen w-screen z-50 inset-0 bg-[#17191B]/60 backdrop-blur-sm flex justify-center items-center`}
  >
    <div className="w-[500px] p-6 bg-white border rounded-lg flex flex-col justify-center items-center mt-[200px] mr-[400px] font-iranyekan">
      <form className="w-[452px] flex flex-col justify-between p-2 h-3/4" onSubmit={handleSubmit}>
        
        <div className="flex items-center justify-between">
          <button onClick={onClose}><Icon iconName="Close" /></button>
          <h2 className="text-2xl text-center font-black">
            {/* change the heading based on the current stage */}
            {stage === 1
              ? "ساختن ورک‌اسپیس جدید‌"
              : stage === 2
              ? "انتخاب رنگ ورک‌اسپیس"
              : "مرور اطلاعات"}
          </h2>
          {/* Show the LeftArrow when the current stage does not equal 1 */}
          <button onClick={handleBackBtn}>{stage>1 && <Icon iconName="LeftArrow"/>}</button>
        </div>
        {/* first stage*/}
        {stage === 1 && (
          <div className="flex flex-col mb-8 mt-8">
            <label
              htmlFor="workSpaceName"
              className="fontWeight-normal text-sm"
            >
              نام ورک‌اسپیس
            </label>
            <input
              type="text"
              id="workSpaceName"
              className="w-full rounded-md border border-[#AAAAAA] h-[40px] mt-1 outline-none"
              value={workspaceName}
              onChange={handleOnChange}
            />
          </div>
        )}
        {/* second stage */}
        {stage === 2 && (
          <div className="mb-8 mt-8 flex">
            <div className={`w-[70px] h-[70px] ml-[10px] rounded-lg text-white text-2xl font-black flex justify-center items-center`} style={{backgroundColor:`${selectedColor}`}}>
              {initials}
            </div>
            <div>
              <h6>رنگ ورک‌اسپیس</h6>
              <div className="flex items-center w-[293px] flex-wrap">
                <Icon iconName="Unavailable"/>
              {[
      "#4C6EF5", "#228BE6", "#15AABF", "#12B886", "#208D8E", "#40C057", "#82C91E", "#FAB005",
      "#FD7E14", "#FA5252", "#E64980", "#BE4BDB", "#7950F2"
    ].map((color, index) => (
      <button
      key={index}
      type="button"
      className={`relative ${color === selectedColor ? "h-7 w-7 rounded-xl" : "h-5 w-5 m-[5px] rounded-lg"} rounded-lg ${
        color === "#FD7E14" ? "break-line" : ""
      }`}
      onClick={()=>handleColor(color)}
      style={{backgroundColor:color}}
    >{selectedColor===color&& <div className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>}</button>
    ))}
              </div>
            </div>
          </div>
        )}
        {/* third stage */}
        {stage === 3 && (
          <div className="mb-8 mt-8 pt-4 pb-4 pr-3 pl-3 flex-col justify-between border-[#AAAAAA] rounded-lg border-[0.5px]">
            <div className="flex justify-between h-[34px]">
              <h6 className="text-sm font-black">نام ورک‌اسپیس</h6>
              <h6 className="text-sm font-black">{workspaceName}</h6>
            </div>
            <div className="flex justify-between h-[34px]">
              <h6 className="text-sm font-black">رنگ ورک‌اسپیس</h6>
              <div className={`h-[15px] w-[15px] m-[5px] rounded-sm`} style={{backgroundColor:`${selectedColor}`}}></div>
            </div>
          </div>
        )}
        {/* The button should be of type submit only when it's the last stage */}
        {stage===3?(<Button color="brand" size="full" type="submit">
        افزودن ورک اسپیس
      </Button> ):(
        <Button color="brand" size="full" type="button" onClick={handleContinue}>
        ادامه
      </Button>
      )
        }
      </form>
    </div>
    </div>)
};
export default CreateNewWorkspace;