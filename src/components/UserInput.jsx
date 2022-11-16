import React, { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from "@material-tailwind/react";

const UserInput = ({ open, toggle }) => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={open}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          <div className="flex w-full flex-col gap-4">
            <Input type="text" label="Title" />
            <Input type="text" label="Description" />
            <Input type="file" label="Image" />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={toggle} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={toggle}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default UserInput;
