import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
import { Button } from "@mui/material";


function App() {
    const [openPicker, data, authResponse] = useDrivePicker();
    // const customViewsArray = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
        openPicker({
            clientId: "844170901133-pfvjih9heb1uephic4eat1gitj11fg8q.apps.googleusercontent.com",
            developerKey: "AIzaSyDnW62k6JcWVVUoit6gbVF0ThVu-p-lP-U",
            viewId: "DOCS",
            //token:"##youraccesstoken##", // pass oauth token in case you already have one
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            // customViews: customViewsArray, // custom view
        });
    };

    useEffect(() => {
        // do anything with the selected/uploaded files
        if (data) {
            data.docs.map((i) => console.log(i));
        }
    }, [data]);

    return (
        <div>
            <Button variant="contained" onClick={() => handleOpenPicker()}>Upload On Drive</Button>
        </div>
    );
}

export default App;