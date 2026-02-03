


  
  
  
  
  
  
  
  
  
  
  
  
  









                
        
        





import React, { useState,useRef, forwardRef, useImperativeHandle } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
const Image = styled('img')({
  width: '26px',
  height: '26px',
  verticalAlign: 'middle',
  marginRight: '6px',
});

const ItemTypes = {
  ITEM: 'item',
};

const DraggableItem = ({ item, index, moveItem, checked, handleToggle }) => {
    const ref = React.useRef(null);
  
    const [, drop] = useDrop({
      accept: ItemTypes.ITEM,
      hover(draggedItem, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = draggedItem.index;
        const hoverIndex = index;
  
        if (dragIndex === hoverIndex) {
          return;
        }
  
        const hoverBoundingRect = ref.current.getBoundingClientRect();
  
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
  
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
  
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
  
        moveItem(dragIndex, hoverIndex);
  
        draggedItem.index = hoverIndex;
      },
    });
  
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.ITEM,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        clientOffset: monitor.getClientOffset() || { y: 0 },
      }),
    });
  
    drag(drop(ref));
  
    return (
      <ListItem
        ref={ref}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        disablePadding
      >
        <ListItemButton dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.includes(item.id)}
              tabIndex={-1}
              disableRipple
              onClick={handleToggle(item.id)}
            />
          </ListItemIcon>
          <ListItemText primary={item.name} primaryTypographyProps={{ 
            sx: { fontSize: '1.5rem' }
          }} />
        </ListItemButton>
      </ListItem>
    );
  };
  

const FeatureSelectionView = forwardRef((props, ref) => {
  const featureList = [
  'Duration', 'Credit Amount', 'Installment Rate', 'Residence Length', 'Existing Credits', 
  'Dependents', 'Age', 'Gender', 'Checking Account', 'Credit History',
  'Purpose', 'Savings', 'Employment', 'Debtors', 'Property', 'Installment Plans', 
  'Housing', 'Job', 'Telephone', 'Foreign Worker'
 ];


  const generateFeatures = (features) => {
    return features.map((name, index) => ({
      id: `${index + 1}`,
      name
    }));
  };

  const [features, setFeatures] = useState(generateFeatures(featureList));
  const [checked, setChecked] = useState([]);

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedFeatures = [...features];
    const [movedItem] = updatedFeatures.splice(fromIndex, 1);
    updatedFeatures.splice(toIndex, 0, movedItem);
    setFeatures(updatedFeatures);
  };

  useImperativeHandle(ref, () => ({
    getSelectedFeatures: () => {
      const selectedFeatures = features.filter(feature => checked.includes(feature.id));
      const rankedSelection = selectedFeatures.map((feature, index) => ({
        ...feature,
        rank: index + 1,
      }));
      return rankedSelection;
    }
  }));

  return (
    <DndProvider backend={HTML5Backend}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        height="98%"
        boxShadow="0px 4px 12px #7986cb" 
        borderRadius="8px"
        padding="6px"
        margin='6px'
      >
        <Typography variant="h4" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold'}}>
          Feature Selection & Ranking
        </Typography>
        <Typography
        variant="body1"
        component="div"
        gutterBottom
        color="#000000"
        sx={{
            fontSize: '20pt',
            lineHeight: 1.6,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            margin: '10px'
        }}
            >
              <Image src='/Red_exclaim.png' alt="Info Icon" />
         Which features do you consider crucial for evaluating or auditing AI fairness? Please select the feature first, then drag to rank.
        </Typography>
        <Typography
            variant="body1"
            component="div"
            color="primary"
            sx={{
                fontSize: '1.5rem',
                lineHeight: 1.6,
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                fontWeight: 'bold',
                
            }}
            >
            Selected features: {checked.length}/{features.length}
            </Typography>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {features.map((feature, index) => (
            <DraggableItem
              key={feature.id}
              item={feature}
              index={index}
              moveItem={moveItem}
              checked={checked}
              handleToggle={handleToggle}
            />
          ))}
        </List>
        
      </Box>
    </DndProvider>
  );
});

export default FeatureSelectionView;



