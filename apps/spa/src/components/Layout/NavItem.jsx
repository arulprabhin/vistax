import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Collapse, Tooltip, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const RenderSubItems = ({ classes, icon: Icon, title, menuOpen, subItems, open: ParentOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!ParentOpen) {
      setOpen(false);
    }
  }, [ParentOpen]);

  return (
    <>
      <Button className={clsx(classes.iconButton, classes.subIconButton)} onClick={() => menuOpen && setOpen(!open)}>
        <Icon />
        <Typography className={classes.iconButtonText}>{title}</Typography>
        {open ? <ExpandLess className={classes.expandIcon} /> : <ExpandMore className={classes.expandIcon} />}
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {subItems.map(({ href: href_lvl2, title: title_lvl2, icon: Icon_lvl2 }, idx) => (
          <Button
            key={idx}
            className={clsx(classes.iconButton, classes.subIconButtonLvl2)}
            activeClassName={classes.iconButtonActive}
            component={NavLink}
            to={href_lvl2}
          >
            <Icon_lvl2 />
            <Typography className={classes.iconButtonText}>{title_lvl2}</Typography>
          </Button>
        ))}
      </Collapse>
    </>
  );
};

const NavItem = ({ item, classes, menuOpen }) => {
  const [open, setOpen] = useState(false);

  const { href, title, icon: Icon, subItems } = item;

  if (subItems) {
    return (
      <>
        <Button className={classes.iconButton} onClick={() => menuOpen && setOpen(!open)}>
          <Tooltip title={title} arrow>
            <Icon />
          </Tooltip>
          <Typography className={classes.iconButtonText}>{title}</Typography>
          {open ? <ExpandLess className={classes.expandIcon} /> : <ExpandMore className={classes.expandIcon} />}
        </Button>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            flexShrink: 0,
          }}
        >
          {subItems.map(({ href: href_lvl1, title: title_lvl1, icon: Icon_lvl1, subItems: lvl2SubItems }, index) =>
            lvl2SubItems ? (
              <RenderSubItems
                key={`${index}_${title_lvl1}`}
                classes={classes}
                icon={Icon_lvl1}
                title={title_lvl1}
                subItems={lvl2SubItems}
                open={open}
                menuOpen={menuOpen}
              />
            ) : (
              <Button
                key={href_lvl1}
                className={clsx(classes.iconButton, classes.subIconButton)}
                activeClassName={classes.iconButtonActive}
                component={NavLink}
                to={href_lvl1}
              >
                <Icon_lvl1 />
                <Typography className={classes.iconButtonText}>{title_lvl1}</Typography>
              </Button>
            )
          )}
        </Collapse>
      </>
    );
  }

  return (
    <Button className={classes.iconButton} activeClassName={classes.iconButtonActive} component={NavLink} to={href}>
      <Tooltip title={title} arrow>
        <Icon />
      </Tooltip>
      <Typography className={classes.iconButtonText}>{title}</Typography>
    </Button>
  );
};

export default NavItem;
