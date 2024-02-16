export const CURRENT_CONFIG = {
  /**
   * APP ID: 142768
   * App Key: 95131b121a4d65ac2f27b52b0e32b73
   * App License: aSXcx7vHev2ox2nK/YCD4SRq1aKOvGSbFcbtrI93lFCkBZJ/2BcbK9S6In8hzXDERU/g5+u3yiJfIFLigurMXCI4CRRAaikxV1AaXyOnBl0HODs0TOAqqjqFQF+TPSuE36aE+3xwHoZvQlpIuhh00Ra4iE9uVTyIWhL0jar4h10=
   */
  // license
  appId: '142768', // You need to go to the development website to apply.
  appKey: '95131b121a4d65ac2f27b52b0e32b73', // You need to go to the development website to apply.
  appLicense: 'aSXcx7vHev2ox2nK/YCD4SRq1aKOvGSbFcbtrI93lFCkBZJ/2BcbK9S6In8hzXDERU/g5+u3yiJfIFLigurMXCI4CRRAaikxV1AaXyOnBl0HODs0TOAqqjqFQF+TPSuE36aE+3xwHoZvQlpIuhh00Ra4iE9uVTyIWhL0jar4h10=', // You need to go to the development website to apply.

  // http
  baseURL: 'http://192.168.0.6:6789/', // This url must end with "/". Example: 'http://192.168.1.1:6789/'
  websocketURL: 'ws://192.168.0.6:6789/api/v1/ws', // Example: 'ws://192.168.1.1:6789/api/v1/ws'

  // livestreaming
  // RTMP  Note: This IP is the address of the streaming server. If you want to see livestream on web page, you need to convert the RTMP stream to WebRTC stream.
  rtmpURL: 'Please enter the rtmp access address.', // Example: 'rtmp://192.168.1.1/live/'
  // GB28181 Note:If you don't know what these parameters mean, you can go to Pilot2 and select the GB28181 page in the cloud platform. Where the parameters same as these parameters.
  gbServerIp: 'Please enter the server ip.',
  gbServerPort: 'Please enter the server port.',
  gbServerId: 'Please enter the server id.',
  gbAgentId: 'Please enter the agent id',
  gbPassword: 'Please enter the agent password',
  gbAgentPort: 'Please enter the local port.',
  gbAgentChannel: 'Please enter the channel.',
  // RTSP
  rtspUserName: 'Please enter the username.',
  rtspPassword: 'Please enter the password.',
  rtspPort: '8554',
  // Agora
  agoraAPPID: 'Please enter the agora app id.',
  agoraToken: 'Please enter the agora temporary token.',
  agoraChannel: 'Please enter the agora channel.',

  // map
  // You can apply on the AMap website.
  amapKey: 'Please enter the amap key.',

}
