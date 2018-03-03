import test_net_direct from './net_direct'
import test_net_tcp from './net_tcp'
import test_net_tls from './net_tls'

export default function () ::
  describe @ 'hub.tcp', test_net_tcp
  describe @ 'hub.tls', test_net_tls
  describe @ 'hub.direct_stream', test_net_direct
