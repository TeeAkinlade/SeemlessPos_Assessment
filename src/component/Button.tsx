import { IconType } from "react-icons";

interface ButtonProps {
    label: string,
    disable?: boolean,
    icon?: IconType,
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
}

const Button:React.FC<ButtonProps> = ({ label, disable, icon: Icon, onClick}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disable} 
      className='disable:opacity-70 disabled:cursor-not-allowed rounded-md hover:bg-gray-900 bg-black w-full text-center mt-6 outline-none text-sm md:text-base py-1.5 px-2 md:py-3 md:px-4 text-white'>
        {Icon && <Icon />}
        {label}
    </button>
  )
}

export default Button