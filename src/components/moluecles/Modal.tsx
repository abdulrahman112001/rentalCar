/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import { FaClosedCaptioning } from "react-icons/fa6";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.10)",
  borderRadius: "10px",
//   backdropFilter: "blur(20px)",
  maxHeight: "90vh",
  overflowY: "scroll !important",
  p: 4,
  border: "0",
  borderColor: "red",
  // height:"100%"
};
type ModalComp_TP = {
  onClose: () => void;
  open: boolean;
  Children: any;
  className?: string;
  hidden?: boolean;
  hiddenMobile?: boolean;
  classNameBox?: string;
};
export default function ModalComp({
  onClose,
  open,
  Children,
  className,
  hidden,
  hiddenMobile,
  classNameBox,
}: ModalComp_TP) {
  const theme = useTheme();

  return (
    <div className="max-h-[350px] ">
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={`max-w-[700px] mx:max-w-[900px] 2xl:max-w-[950px] z-[9998] m-4  md:m-auto ${className} py-0 modal-camp`}
      >
        <Box
          sx={style}
          className={`scroll_main px-0 md:px-4 rtl:md:!pr-8 dark:!bg-dark-primary  ${classNameBox}`}
        >
          <div
            className={`absolute ltr:!right-[20px] ltr:left-auto left-[20px] cursor-pointer top-[15px] ${
              hidden ? "md:hidden" : hiddenMobile ? "hidden" : ""
            } `}
            onClick={onClose}
          >
            {/* <GridCloseIcon
              className=" dark:!text-white"
              style={{ color: theme.palette.primary?.main }}
            /> */}
            
            <span className=" lg:text-[20px] font-semibold text-[#D5281d] z-50 relative">Cancel</span>
          </div>
          <div className="mt-10">{Children}</div>
        </Box>
      </Modal>
    </div>
  );
}
