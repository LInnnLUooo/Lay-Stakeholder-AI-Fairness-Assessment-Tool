import React, { useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const ItemTypes = {
    ITEM: 'item',
};

const DraggableItem = ({ item, index, moveItem }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        hover(draggedItem, monitor) {
            if (!ref.current) return;
            const dragIndex = draggedItem.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;
            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset ? clientOffset.y - hoverBoundingRect.top : 0;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
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
        <ListItem ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} disablePadding>
            <ListItemText
                primary={`${item.rank}. ${item.name} - ${item.metric}`}
                primaryTypographyProps={{ sx: { fontSize: '1.5rem' } }}
            />
        </ListItem>
    );
};

const FairnessTradeOffView = () => {
    const location = useLocation();
    const { selectedFeaturesWithMetrics } = location.state || { selectedFeaturesWithMetrics: [] };
    const [features, setFeatures] = useState(selectedFeaturesWithMetrics);

    const moveItem = (fromIndex, toIndex) => {
        const updatedFeatures = [...features];
        const [movedItem] = updatedFeatures.splice(fromIndex, 1);
        updatedFeatures.splice(toIndex, 0, movedItem);
        setFeatures(updatedFeatures);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                height="100%"
                boxShadow="0px 4px 12px #7986cb"
                borderRadius="8px"
                padding="6px"
                margin="6px"
                width = '70%'
                sx={{ backgroundColor: "#B2DFDB"}} 
            >
               <Typography variant="h4" component="div" gutterBottom color="black" sx={{ fontWeight: 'bold'}}>
                       Fairness Trade-off
                        </Typography>

                <Typography variant="h4" component="div" gutterBottom color="#000000" sx={{ fontSize: '1.5rem', lineHeight: 1.6, textShadow: '1px 1px 2px rgba(0,0,0,0.1)', margin: '10px' }}>
                Since fairness metrics might conflict, it is impractical to satisfy all of them simultaneously. <br/>
                After exploring both features and fairness metrics, you can now re-rank your Feature-Metric pairs based on your fairness priority, or retain your original ranking (i.e., feature ranking). <br/>
                Your input will offer valuable insights to help us understand how to navigate fairness trade-offs.<br/><br/>
    
    
    <strong>🗺️Ranking Guidance:</strong><br/>
    When ranking, please consider the following questions:<br/>
    - Feature Dimension: Which aspect of fairness do you most want to achieve?<br/>
    - Metric Dimension: Which fairness metric best aligns with your definition of fairness—i.e., the approach you believe best achieves fairness?<br/>
    <br/>
    <strong>If re-ranking, please drag and drop your Feature-Metric pairs.</strong>

</Typography>

<Box display="flex" justifyContent="center" alignItems="center" width="50%" >
<List sx={{ width: '100%', margin:'30px', bgcolor: 'background.paper' }}>
                    {features.map((item, index) => (
                        <DraggableItem key={item.id} item={item} index={index} moveItem={moveItem} />
                    ))}
                </List>
</Box>
 
            </Box>
        </DndProvider>
    );
};



export default FairnessTradeOffView;

