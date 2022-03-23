import React from 'react';
import {Avatar, ListItem, ListItemAvatar, List, Checkbox} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';


const TodoItem = ({item, onDeleteText}) => {
    const keyValue = Math.floor(Math.random()*1000).toString()
    const labelId = `checkbox-list-label-${keyValue}`;
    const deleter = () => {
        onDeleteText(item)
    }
    return (
        // <List>

        <ListItem
            key={item.timestamp.toString()}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
                  <DeleteTwoToneIcon  onClick={deleter}/>
              </IconButton>
            }
            // disablePadding
          >
            <Checkbox
                  edge="start"
                  // checked={}
                  tabIndex={-1}
                  // disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
            <li key={item.timestamp.toString()}>{item.task}</li>
        </ListItem>
        // </List>
    );
};

export default TodoItem;