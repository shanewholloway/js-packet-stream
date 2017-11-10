import createPacketParser from 'msg-fabric-packet-stream';

function basic_router_plugin(plugin_options = {}) {
  const random_id_self = plugin_options.random_id_self || _random_id_self;
  return { subclass(MessageHub_PI, bases) {
      Object.assign(MessageHub_PI.prototype, {
        packetParser: createPacketParser(plugin_options),

        _init_router() {
          const id_self = random_id_self();
          const router = new bases.MessageRouter(id_self);
          router.allowUnverifiedRoutes = true;
          return router;
        } });
    } };
}

function _random_id_self() {
  return 0 | Math.random() * 0xffffffff;
}

export default basic_router_plugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLXJvdXRlci1iYXNpYy5tanMiLCJzb3VyY2VzIjpbIi4uL2NvZGUvcGx1Z2lucy9yb3V0ZXIvYmFzaWMuanN5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVQYWNrZXRQYXJzZXIgZnJvbSAnbXNnLWZhYnJpYy1wYWNrZXQtc3RyZWFtJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYXNpY19yb3V0ZXJfcGx1Z2luKHBsdWdpbl9vcHRpb25zPXt9KSA6OlxuICBjb25zdCByYW5kb21faWRfc2VsZiA9IHBsdWdpbl9vcHRpb25zLnJhbmRvbV9pZF9zZWxmIHx8IF9yYW5kb21faWRfc2VsZlxuICByZXR1cm4gQDogc3ViY2xhc3MoTWVzc2FnZUh1Yl9QSSwgYmFzZXMpIDo6XG4gICAgT2JqZWN0LmFzc2lnbiBAIE1lc3NhZ2VIdWJfUEkucHJvdG90eXBlLCBAOlxuICAgICAgcGFja2V0UGFyc2VyOiBjcmVhdGVQYWNrZXRQYXJzZXIgQCBwbHVnaW5fb3B0aW9uc1xuXG4gICAgICBfaW5pdF9yb3V0ZXIoKSA6OlxuICAgICAgICBjb25zdCBpZF9zZWxmID0gcmFuZG9tX2lkX3NlbGYoKVxuICAgICAgICBjb25zdCByb3V0ZXIgPSBuZXcgYmFzZXMuTWVzc2FnZVJvdXRlcihpZF9zZWxmKVxuICAgICAgICByb3V0ZXIuYWxsb3dVbnZlcmlmaWVkUm91dGVzID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcm91dGVyXG5cbmZ1bmN0aW9uIF9yYW5kb21faWRfc2VsZigpIDo6XG4gIHJldHVybiAwIHwgTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmZcbiJdLCJuYW1lcyI6WyJiYXNpY19yb3V0ZXJfcGx1Z2luIiwicGx1Z2luX29wdGlvbnMiLCJyYW5kb21faWRfc2VsZiIsIl9yYW5kb21faWRfc2VsZiIsInN1YmNsYXNzIiwiTWVzc2FnZUh1Yl9QSSIsImJhc2VzIiwiYXNzaWduIiwicHJvdG90eXBlIiwiY3JlYXRlUGFja2V0UGFyc2VyIiwiaWRfc2VsZiIsInJvdXRlciIsIk1lc3NhZ2VSb3V0ZXIiLCJhbGxvd1VudmVyaWZpZWRSb3V0ZXMiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOztBQUVlLFNBQVNBLG1CQUFULENBQTZCQyxpQkFBZSxFQUE1QyxFQUFnRDtRQUN2REMsaUJBQWlCRCxlQUFlQyxjQUFmLElBQWlDQyxlQUF4RDtTQUNTLEVBQUNDLFNBQVNDLGFBQVQsRUFBd0JDLEtBQXhCLEVBQStCO2FBQ2hDQyxNQUFQLENBQWdCRixjQUFjRyxTQUE5QixFQUEyQztzQkFDM0JDLG1CQUFxQlIsY0FBckIsQ0FEMkI7O3VCQUcxQjtnQkFDUFMsVUFBVVIsZ0JBQWhCO2dCQUNNUyxTQUFTLElBQUlMLE1BQU1NLGFBQVYsQ0FBd0JGLE9BQXhCLENBQWY7aUJBQ09HLHFCQUFQLEdBQStCLElBQS9CO2lCQUNPRixNQUFQO1NBUHVDLEVBQTNDO0tBRE8sRUFBVDs7O0FBVUYsU0FBU1IsZUFBVCxHQUEyQjtTQUNsQixJQUFJVyxLQUFLQyxNQUFMLEtBQWdCLFVBQTNCOzs7OzsifQ==
