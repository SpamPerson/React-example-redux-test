import { DefaultButton, PrimaryButton, Stack, TextField } from "@fluentui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import { deleteFirst, insertFirst } from "../store/slice/firstSlice";
import { addSecond, changeSecond, deleteSecond, ISecond } from "../store/slice/secondSlice";

const Test: React.FC = () => {
   const first = useSelector((state: RootState) => state.first.value);
   const second = useSelector((state: RootState) => state.second);
   const dispatch = useDispatch();
   const [firstText, setFirstText] = React.useState<string>("");
   const [secondId, setSecondId] = React.useState<string>("");
   const [secondName, setSecondName] = React.useState<string>("");

   const onChangeFirst = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => {
      setFirstText(newValue!);
   };

   const onClickFirstInsert = () => {
      if (first == firstText) {
         alert("Equals the value");
      } else {
         dispatch(insertFirst(firstText));
      }
   };

   const onClickFirstDelete = () => {
      dispatch(deleteFirst());
      setFirstText("");
   };

   const onChangeSecondId = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => {
      setSecondId(newValue!);
   };

   const onChangeSecondName = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => {
      setSecondName(newValue!);
   };

   const secondList = React.useMemo(() => {
      return second.map((v, i) => (
         <Stack
            key={i}
            tokens={{ childrenGap: 10, padding: 10 }}
            style={{ border: "1px solid #e0e0e0", margin: 10, width: 200, alignItems: "center" }}
         >
            <Stack.Item>No : {i + 1}</Stack.Item>
            <Stack.Item>ID : {v.id}</Stack.Item>
            <Stack.Item>Name : {v.name}</Stack.Item>
         </Stack>
      ));
   }, [second]);

   const onClickSecondAdd = () => {
      if (secondId != "" && secondName != "") {
         if (second.findIndex((x) => x.id === secondId) > -1) {
            alert("ID already exists");
         } else {
            let newSecond: ISecond = {
               id: secondId,
               name: secondName,
            };
            dispatch(addSecond(newSecond));
         }
      } else {
         if (secondId === "") {
            alert("Please enter ID");
         } else {
            alert("Please enter Name");
         }
      }
   };

   const onClickSecondUpdate = () => {
      if (secondId != "" && secondName != "") {
         if (second.findIndex((x) => x.id === secondId) > -1) {
            let updateSecond: ISecond = {
               id: secondId,
               name: secondName,
            };
            dispatch(changeSecond(updateSecond));
         } else {
            alert("There is no ID to update");
         }
      } else {
         if (secondId === "") {
            alert("Please enter ID");
         } else {
            alert("Please enter Name");
         }
      }
   };
   
   const onClickSecondDelete = () => {
      if (secondId != "") {
         if (second.findIndex((x) => x.id === secondId) > -1) {
            dispatch(deleteSecond(secondId));
         } else {
            alert("There is no ID to delete");
         }
      } else {
         alert("Please enter ID");
      }
   };

   return (
      <Stack horizontal tokens={{ padding: 10, childrenGap: 30 }} horizontalAlign="center">
         <Stack tokens={{ childrenGap: 10 }} horizontalAlign="center">
            <h1>First</h1>
            <Stack horizontal tokens={{ childrenGap: 5 }}>
               <TextField value={firstText} placeholder="Input Text" onChange={onChangeFirst} />
               <PrimaryButton text="Insert" onClick={onClickFirstInsert} />
               <DefaultButton text="Delete" onClick={onClickFirstDelete} />
            </Stack>
            <Stack horizontal>
               <h3>InputValue : {first}</h3>
            </Stack>
         </Stack>
         <Stack tokens={{ childrenGap: 10 }} horizontalAlign="center">
            <h1>Second</h1>
            <Stack horizontal tokens={{ childrenGap: 10 }}>
               <Stack.Item align="center" style={{ width: 35 }}>
                  <span>ID</span>
               </Stack.Item>
               <Stack.Item>
                  <TextField placeholder="ID" onChange={onChangeSecondId} />
               </Stack.Item>
            </Stack>
            <Stack horizontal tokens={{ childrenGap: 10 }}>
               <Stack.Item align="center" style={{ width: 35 }}>
                  <span>Name</span>
               </Stack.Item>
               <Stack.Item>
                  <TextField placeholder="Name" onChange={onChangeSecondName} />
               </Stack.Item>
            </Stack>
            <Stack horizontal tokens={{ childrenGap: 10 }}>
               <PrimaryButton text="Add" onClick={onClickSecondAdd} />
               <DefaultButton text="Update" onClick={onClickSecondUpdate} />
               <DefaultButton text="Delete" onClick={onClickSecondDelete} />
            </Stack>
            <Stack>
               <h2 style={{ textAlign: "center" }}>List</h2>
               {secondList}
            </Stack>
         </Stack>
      </Stack>
   );
};

export default Test;
