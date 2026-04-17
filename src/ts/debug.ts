const $debug = document.querySelector('#debug');

export function log(...data: any[]) {
  if ($debug) {
    $debug.textContent = data.join('\n');
  }
}
