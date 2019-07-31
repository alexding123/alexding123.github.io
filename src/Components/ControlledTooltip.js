import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default function ControlledTooltip() {
  const [open, setOpen] = React.useState(false);

  function handleTooltipClose() {
    setOpen(false);
  }

  function handleTooltipOpen() {
    setOpen(true);
  }

  return (
    <Tooltip onClose={handleTooltipClose} onOpen={handleTooltipOpen} open={open} title={this.props.title}>
        {this.props.children}
    </Tooltip>
  );
}