function get() {
    const _0x43e1 = [
      'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQu',
      'Y29tL0FubmV2ZXJzbGVlcDA1L0RlbW9kZXIv',
      'cmVmcy9oZWFkcy9tYWluL0luaXRpYWxpemF0',
      'aW9uLmpzb24=',
    ];
    return atob(_0x43e1[0] + _0x43e1[1] + _0x43e1[2] + _0x43e1[3]);
  }
  
  fetch(get())
    .then(_0x2e4a => _0x2e4a.json())
    .then(_0x37e6 => {
      const _0x130a = _0x37e6;
      document.querySelector('.version').textContent = 'Phiên bản: ' + _0x130a.update_version_name + ' (' + _0x130a.update_version_code + ')';
      document.querySelector('.time').textContent = 'Cập nhật vào: ' + _0x130a.update_time;
      document.querySelector('.download-button').href = _0x130a.update_url;
      const _0x3085 = document.querySelector('.loading-overlay');
      _0x3085.style.display = 'none';
    })
    .catch(_0x4e34 => console.error('Error:', _0x4e34));