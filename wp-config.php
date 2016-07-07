<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gewoon_hollands');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'mindlabs');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '/!eR29`ELc5F=gi-&P?5P?d$2|EqxJjLr^Fw&A>P`y>?Cl3Y_aq$0aH,`_,3b.;@');
define('SECURE_AUTH_KEY',  'B85J++1lx>bNOc/V~V >|+1,lk`:uBa|+<IE}|JTwKbxs5`r-pN3((/L{>[vV|KK');
define('LOGGED_IN_KEY',    'qoJz`+NktbD?x ?W:Xn`4HK?i+j G l +cgX8 )_E20.D;RAIy$S1/,lB! oZvbo');
define('NONCE_KEY',        'k0ZKi%]-cHo1_dP-k*N/u}iS`~{1/}M|-[ mkv=edQyPf/L)3MWW&6l-6[Px-j8f');
define('AUTH_SALT',        '05W{A) /_n|Xg,.t-Lm*s7+mhw^b-Le9~+eH-hRE]Q m2JCVzfubxj(#X{1B-4g-');
define('SECURE_AUTH_SALT', 'P=G/rb}`n[D0dRj8yp?+Rk%$A <4TP#G xd}S2c*Us)1S!@qx2)7uws.KhhG$fv-');
define('LOGGED_IN_SALT',   '#Q@8Wf=G4c$-Y4_XU[1+(z{nfUHy+;@prEOAWn{E,n+RD`Ro184a0:$$]kO;Yi8/');
define('NONCE_SALT',       '+^%+tM{o?2sVuy?pS$jfn1WNyM(C-fCVV.u<vY ]:fS~|~+]!YK)Vbk3pk{_N[|]');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ghw_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
