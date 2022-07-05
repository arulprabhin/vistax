import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import data from './data.json';
import './style.css';

const SiteChart = () => {
  const ref = useRef(null);

  let root;
  let svg = null;
  let size = null;
  let circlesInfo = null;
  const circlesAngle = 360 / data.length;
  let groupCenter;

  useEffect(() => {
    root = d3.select(ref.current);
    render();
  }, []);

  const rerender = () => {
    remove();
    render();
  };

  const remove = () => {
    if (svg) svg.remove();
  };

  const render = () => {
    const blockSize = ref.current.getBoundingClientRect();
    const width = blockSize.width;
    let height = blockSize.height;
    let cX = width / 2;
    let cY = height / 2;
    let min = width < height ? width : height;
    let radius = min * 0.266;

    size = {
      width,
      height,
      infoRadius: radius,
      containerAngle: Math.PI * 5.8,
      outerRadius: min / 3,
      cX,
      cY,
      min,
      center: 5,
    };

    svg = root.append('svg').attr('viewBox', `0 0 ${width} ${height}`);

    _addDefs();
    _addLight();
    _addTable();
    //_addQty();
    _addCenterAnimation();
    _addOuterLine();
    _addOuterPoints();
    _addInfo();
    groupCenter = svg.append('g').style('filter', 'url(#gooey)');
    //
    _addCenterCircle();
  };

  const augment = (num, count) => {
    if (num == null || data.length < num || num < 0) return;
    if (count == null || count < 1) return;

    const texts = circlesInfo.nodes();
    const animationDuration = 3000;
    const circlesAngle = (2 * Math.PI) / data.length;
    let alpha = circlesAngle * (num - 1);
    const r = size.infoRadius;
    let x = Math.cos(alpha) * r + size.cX;
    let y = Math.sin(alpha) * r + size.cY;
    groupCenter
      .append('circle')
      .classed('animted-circle', true)
      .attr('cx', size.cX)
      .attr('cy', size.cY)
      .attr('r', size.center)
      .transition('inward')
      .ease(d3.easeExp) // apply a transition
      .duration(animationDuration)
      .attr('cx', x)
      .attr('cy', y)
      .style('opacity', 0)
      .remove();
    setTimeout(() => {
      d3.select(texts[num]).text((d) => {
        const sum = +d.value + +count;
        const old = +d.value;

        d.value = sum;
        _checkV(old, d.value);
        return _mapValue(d.value);
      });
    }, 2000);
  };

  // eslint-disable-next-line
  const increment = (num) => {
    augment(num, 1);
  };

  const _checkV = (old, value) => {
    if ((old <= 99 && value > 99) || (old <= 999 && value > 999) || (old <= 9999 && value > 9999)) {
      rerender();
    }
  };

  /*  const _addQty = () => {
    const g = svg.append('g').classed('qty', true);
    g.append('circle').classed('qty__circle', true).attr('cx', 30).attr('cy', 30).attr('r', 6);
    g.append('text').classed('qty__text', true).attr('x', 45).attr('y', 36).text('3 SITES');
  };*/

  const _addLight = () => {
    const r = (size.min * 0.82) / 2;
    svg
      .append('circle')
      .classed('circle__light', true)
      .attr('cx', size.cX)
      .attr('cy', size.cY)
      .attr('r', r)
      .style('fill', 'url(#radial-gradient)');
  };

  const _addTable = () => {
    const table = svg.append('g').classed('table', true);
    table
      .append('rect')
      .classed('table__border', true)
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', size.width)
      .attr('height', size.height);

    table
      .append('line')
      .classed('table__line table__line_vertical', true)
      .attr('x1', size.cX)
      .attr('x2', size.cX)
      .attr('y1', 0)
      .attr('y2', size.height);

    table
      .append('line')
      .classed('table__line table__line_horizontal', true)
      .attr('x1', 0)
      .attr('x2', size.width)
      .attr('y1', size.cY)
      .attr('y2', size.cY);
  };

  const _addDefs = () => {
    const stop = [
      { offset: 0, color: '#f5c243', opacity: '1' },
      { offset: 0.33, color: '#ec5b31', opacity: '0.65' },
      { offset: 0.67, color: '#df3e4e', opacity: '0.35' },
      { offset: 1, color: '#df3e4e', opacity: '0.01' },
    ];
    const defs = svg.append('defs');
    const radialGradient = defs.append('radialGradient').attr('id', 'radial-gradient');

    radialGradient
      .selectAll('stop')
      .data(stop)
      .enter()
      .append('stop')
      .attr('offset', function (d) {
        return d.offset;
      })
      .attr('stop-color', function (d) {
        return d.color;
      })
      .attr('stop-opacity', function (d) {
        return d.opacity;
      });

    const filter = defs.append('filter').attr('id', 'drop-shadow').attr('filterUnits', 'userSpaceOnUse');

    filter.append('feColorMatrix').attr('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0');
    filter.append('feColorMatrix').attr('values', '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0');
    filter.append('feGaussianBlur').attr('stdDeviation', '9');
    filter.append('feBlend').attr('in', 'SourceGraphic');

    const gooeyFilter = defs.append('filter').attr('id', 'gooey');
    gooeyFilter.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', '10').attr('result', 'blur');
    gooeyFilter
      .append('feColorMatrix')
      .attr('in', 'blur')
      .attr('mode', 'matrix')
      .attr('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')
      .attr('result', 'goo');
    gooeyFilter.append('feComposite').attr('in', 'SourceGraphic').attr('in2', 'goo');
    // .attr('operator','atop');
  };

  const _addCenterCircle = () => {
    // const center = svg.append("g")
    // .classed("center", true);

    groupCenter
      .append('circle')
      .classed('center__circle center__circle_filled', true)
      .attr('cx', size.cX)
      .attr('cy', size.cY)
      .attr('r', size.center);
  };

  const _addCenterAnimation = () => {
    const center = svg.append('g').classed('center_bordered', true);

    const circles = [
      { r: 16, class: 'dashed', opacity: 1 },
      { r: 24, class: 'op03', opacity: 0.3 },
      { r: 32, class: 'op02', opacity: 0.2 },
      { r: 40, class: 'op01', opacity: 0.1 },
    ];

    const centerCircles = center
      .selectAll('circle.center_bordered')
      .data(circles)
      .enter()
      .append('circle')
      .attr('class', function (d) {
        return `center_bordered center_bordered_${d.class}`;
      })
      .attr('cx', size.cX)
      .attr('cy', size.cY)
      .attr('opacity', (d) => {
        return d.opacity;
      });

    const centerCirclesAnimation = function () {
      centerCircles
        .attr('r', (d) => {
          return d.r;
        })
        .transition()
        .duration(700)
        .attr('r', (d) => {
          return d.r + 16;
        })
        .attr('opacity', 0)
        .transition()
        .duration(700)
        .attr('r', (d) => {
          return d.r;
        })
        .attr('opacity', (d) => {
          return d.opacity;
        })
        .on('end', centerCirclesAnimation);
    };
    centerCirclesAnimation();
  };

  const _addOuterLine = () => {
    svg
      .append('circle')
      .classed('circle__outer-line', true)
      .attr('cx', size.cX)
      .attr('cy', size.cY)
      .attr('r', size.outerRadius);
  };

  const _addOuterPoints = () => {
    const cY = size.cY - size.outerRadius;
    const textY = size.cY - (size.outerRadius + 25);

    const container = svg
      .append('g')
      .classed('points-container', true)
      .attr('transform', `rotate(${size.containerAngle} ${size.cX} ${size.cY})`);

    const groups = container
      .selectAll('g.point-group')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'point-group')
      .attr('transform', (d, i) => {
        return `rotate(${circlesAngle * i} ${size.cX} ${size.cY})`;
      });

    groups.append('circle').classed('point', true).attr('cx', size.cX).attr('cy', cY).attr('r', 4);

    groups
      .append('text')
      .classed('point__info', true)
      .attr('x', size.cX)
      .attr('y', textY + 3)
      .text(function (d) {
        return d.text;
      })
      .attr('transform', (d, i) => {
        const angle = -circlesAngle * i - size.containerAngle;
        return `rotate(${angle} ${size.cX} ${textY})`;
      })
      .attr('text-anchor', (d, i) => {
        const leftQuters = circlesAngle * i + size.containerAngle > 180;
        return leftQuters ? 'end' : 'start';
      });
  };

  const _addInfo = () => {
    const infoRadius = size.infoRadius - size.min * 0.03333;

    const infoContainer = svg
      .append('g')
      .classed('info-container', true)
      .attr('transform', `rotate(${size.containerAngle} ${size.cX} ${size.cY})`);

    const groupInfo = infoContainer.append('g').classed('circle__info-groups', true);
    const groups = groupInfo
      .selectAll('g.info-group')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'info-group')
      .attr('transform', (d, i) => {
        return `rotate(${circlesAngle * i} ${size.cX} ${size.cY})`;
      });

    groups
      .append('circle')
      .classed('info-circle', true)
      .attr('cx', size.cX)
      .attr('cy', function () {
        return infoRadius;
      })
      .attr('r', (d) => {
        return _mapSize(d.value);
      })
      .attr('filter', 'url(#drop-shadow)');
    const links = {
      'C & C': 'command-and-control',
      Recon: 'recon',
      Exploit: 'exploit',
      Lateral: 'lateral',
      Actions: 'actions',
    };
    circlesInfo = groups
      .append('a')
      .attr('xlink:href', (d) => {
        return links[d.text];
      })
      .append('text')
      .classed('info-circle__value', true)
      .attr('x', size.cX)
      .attr('y', infoRadius + 9)
      .attr('text-anchor', 'middle')

      .text((d) => {
        return _mapValue(d.value);
      })
      .attr('transform', (d, i) => {
        const angle = -circlesAngle * i - size.containerAngle;
        return `rotate(${angle} ${size.cX} ${infoRadius})`;
      })
      .on('mouseover', function (event, d) {
        d3.select(this).text(d.value);
      })
      .on('mouseout', function (event, d) {
        d3.select(this).text(_mapValue(d.value));
      });
    _addArcs(infoContainer);
  };

  const _addArcs = (container) => {
    const baseAngl = (2 * Math.PI) / data.length;
    const radius = size.infoRadius;

    const info = data.map((item, i, arr) => {
      const isLast = arr.length - 1 == i;
      const startAngle = baseAngl * i + _getAngleByHord(radius, _mapSize(item.value));
      const endR = isLast ? arr[0].value : arr[i + 1].value;
      const endAngle = baseAngl * (i + 1) - _getAngleByHord(radius, _mapSize(endR));
      return {
        startAngle,
        endAngle,
      };
    });

    const arcGroup = container
      .append('g')
      .classed('arcs__group', true)
      .attr('transform', `translate(${size.cX}, ${size.cY})`);

    arcGroup
      .selectAll('path')
      .data(info)
      .enter()
      .append('path')
      .classed('arcs__arc', true)
      .attr('d', (d) => {
        return _getArc(d, radius);
      });
  };

  const _getAngleByHord = (r, x) => {
    return Math.asin(x / r);
  };

  const _getArc = (d, radius) => {
    const arc = d3
      .arc()
      .innerRadius(radius - 1)
      .outerRadius(radius + 1)
      .startAngle(d.startAngle)
      .endAngle(d.endAngle);
    return arc();
  };

  const _mapSize = (value) => {
    if (value < 99) return size.min * 0.03333;
    if (value < 999) return size.min * 0.05;
    return size.min * 0.0666;
  };

  const _mapValue = (value) => {
    // if (value > 4999) return `${Math.floor(value / 1000)} K`;
    // return value;
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (value >= 4999) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return value;
  };

  return <div ref={ref} className="left-table"></div>;
};

export default SiteChart;
