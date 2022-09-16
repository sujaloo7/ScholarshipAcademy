<FormControl variant="filled" className="w-100 mb-5" sx={{}}>
  <InputLabel id="demo-simple-select-standard-label">
    Province/State *
  </InputLabel>
  <Select
    labelId="demo-simple-select-filled-label"
    id="demo-simple-select-filled"
    value={educationData.state ? educationData.state : ""}
    onChange={(e) =>
      setEducationData({
        ...educationData,
        school_state: e.target.value,
      })
    }
    //   value={age}
    //   onChange={handleChange}
  >
    {stateList?.map((ele, index) => {
      //   console.log("test", ele._id, "select", selectState);
      return ele._id === educationData.state ? (
        <MenuItem key={index} value={ele._id}>
          {ele.name}
        </MenuItem>
      ) : (
        <MenuItem key={index} value={ele._id}>
          {ele.name}
        </MenuItem>
      );
    })}
  </Select>
  {/* <Select
  labelId="demo-simple-select-standard-label"
  id="demo-simple-select-standard"
  // value={age}
  onChange={async (e) => {
    setEducationData({
      ...educationData,
      school_state: e.target.value,
    });
  }}
  label="Age"
>
  <MenuItem value="">
    <em>None</em>
  </MenuItem>
  {stateList1?.map((ele, index) => {
    //   console.log("test", ele._id, "select", selectState);
    return ele._id === educationData.school_state ? (
      <MenuItem
        key={index}
        value={ele._id}
        style={{ backgroundColor: "grey" }}
      >
        {ele.state_name}
      </MenuItem>
    ) : (
      <MenuItem key={index} value={ele._id}>
        {ele.state_name}
      </MenuItem>
    );
  })}
</Select> */}
</FormControl>;
