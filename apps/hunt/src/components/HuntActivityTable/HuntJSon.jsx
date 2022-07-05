import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const data = {
  id: 'root',
  name: 'source',
  children: [
    {
      id: '1',
      name: 'result {3}',
      children: [
        {
          id: '5',
          name: 'date',
        },
        {
          id: '6',
          name: 'entry_source',
        },
        {
          id: '7',
          name: 'status_code',
        },
      ],
    },
    {
      id: '2',
      name: 'allFields',
      children: [
        {
          id: '3',
          name: 'Child - 4',
        },
      ],
    },
    {
      id: '4',
      name: 'total',
    },
  ],
};

export default function JSonTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(data)}
    </TreeView>
  );
}
